import React, { useEffect, useState, useRef, useCallback } from "react";
import * as _ from "lodash";
import PropTypes from "prop-types";
import { Button, Form, Modal } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { toast } from 'react-toastify';
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import DefaultImg from "../../../../assets/images/no_image.png";
import { formatMoney } from "../../../../helpers/formatters";

import "../../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./style.scss";

const propTypes = {
  bookingQuotes: PropTypes.array,
  changeQuantity: PropTypes.func,
  onRequest: PropTypes.string,
  service: PropTypes.object,
  quotesInfo: PropTypes.object,
  error: PropTypes.bool,
  totalPrice: PropTypes.array,
};

const ProductItems = ({
  bookingQuotes,
  changeQuantity,
  onRequest,
  service,
  quotesInfo,
  error,
  totalPrice,
}) => {
  const { addItem } = useCart();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [descMore, setDescMore] = useState(false);
  const [extras, setExtras] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState();
  const [errorItems, setErrorItems] = useState(false);
  const [lang, setLang] = useState("en");
  const [available, setAvailable] = useState([]);
  const [openModal, setOpenModal] = useState();
  const descRef = useRef([]);
  const [scrollable, setScrollable] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState();


  useEffect(() => {
    !isEmpty(descRef.current) &&
      descRef.current.map((item) => {
        if (item?.scrollHeight > item?.clientHeight) {
          if (!isEmpty(scrollable)) {
            if (scrollable.indexOf(item) == -1)
              setScrollable((prev) => [...prev, item.id]);
          } else {
            setScrollable((prev) => [...prev, item.id]);
          }
        }
      });
  }, [bookingQuotes]);

  const descNode = useCallback((descNode) => {
    if (descNode?.scrollHeight > descNode?.clientHeight) {
      setScrollable((prev) => [...prev, descNode.id]);
    }
  }, []);

  const handleClose = () => setShow(false);
  const success = () => toast.success(t("item_added"));

  useEffect(() => {
    if (error) {
      setErrorItems(true);
    }
  }, [error]);

  useEffect(() => {
    setLang(i18n.language);
  });

  const selectQuote = (value) => {
    setSelectedQuote(value);
  }

  const submitBooking = (booking) => {
    if (selectedQuote) {
      booking.selectedQuote = selectedQuote
      booking.id = `${booking.id}-${moment(selectedQuote.Commence).format('LT')}`
    }
    if (onRequest === "true") {
      booking.selectedExtras = extras;
      setSelectedBooking(booking);
      setShow(true);
    } else {
      addItem(booking, parseInt(booking.quantity));
      success();
    }
  };

  const serviceType = () => {
    let serviceType = "None";
    if (service && service.IndustryCategoryGroups) {
      switch (service.IndustryCategoryGroups[0]) {
        case 0:
          serviceType = "Accommodation";
          break;
        case 1:
          serviceType = "Activities";
          break;
        case 2:
          serviceType = "Restaurant";
          break;
        case 3:
          serviceType = "Produce";
          break;
        default:
          return "None";
      }
    }

    return serviceType;
  };

  const goToRequestBook = () => {
    const selectedItems = extras.filter((item) => {
      return item.ParentId === selectedBooking.Id;
    });

    selectedBooking.selectedExtras = selectedItems;
    const address = `${service.PhysicalAddress.Line1}, ${service.PhysicalAddress.City}, ${service.PhysicalAddress.PostCode}, ${service.PhysicalAddress.State}`;
    const request = {
      ProductId: selectedBooking.Id,
      ProductName: selectedBooking.Name,
      ProductExtras: selectedItems,
      ProductCode: selectedBooking.Code,
      Price: selectedQuote ? selectedQuote.TotalPrice : selectedBooking.Configurations[0].Quotes[0].TotalPrice,
      CurrentCurrency: "JPY",
      Language: lang === "jp" ? "ja" : lang,
      IndustryCategoryGroup: serviceType(
        selectedBooking.IndustryCategoryGroups[0]
      ),
      CommencementDate: selectedQuote ? selectedQuote.Commence : selectedBooking.Configurations[0].Quotes[0].Commence,
      ConcludeDate: selectedQuote ? selectedQuote.Conclude : selectedBooking.Configurations[0].Quotes[0].Conclude,
      Duration:
        selectedBooking.IndustryCategoryGroups[0] === 0
          ? quotesInfo.duration
          : null,
      Adults: quotesInfo.pax,
      SupplierName: service.Name,
      SupplierAddress: address,
      SupplierEmail: service.PublicEmail,
      SupplierPhone: service.MainPhone.FullPhoneNumberLocalised,
      SupplierWebsite: service.Website,
      SupplierId: service.Id,
      SupplierCode: service.Code,
    };
    navigate(`/request-book?id=${selectedBooking.Id}`, {
      state: { booking: selectedBooking, request: request },
    });
  };

  const seeMore = (id) => {
    if (descMore.length > 0) {
      descMore.map((item) => {
        if (item === id) {
          const data = descMore.filter((item) => item !== id);
          setDescMore(data);
        } else {
          setDescMore((prev) => [...prev, id]);
        }
      });
    } else {
      setDescMore((prev) => [...prev, id]);
    }
  };

  const selectedExtras = (extra, booking, checked) => {
    extra.ParentId = booking.Id;
    if (extras.length > 0) {
      extras.map((item) => {
        if (item.Id !== extra.Id) {
          setExtras((item) => [...item, extra]);
        } else {
          if (!checked) {
            const filtered = extras.filter((item) => {
              return item.Id !== extra.Id;
            });

            setExtras(filtered);
          }
        }
      });
    } else {
      setExtras((item) => [...item, extra]);
    }
  };

  const getPrice = (id, price) => {
    let data = formatMoney(price);
    totalPrice.map((item) => {
      if (item.id === id) data = formatMoney(item.totalPrice);
    });

    return data;
  };


  useEffect(() => {
    if (!isEmpty(bookingQuotes)) {
      const availableItems = bookingQuotes.find((item) => {
        return item?.Configurations[0]?.Quotes;
      });
      setAvailable(availableItems);
    }
  }, [bookingQuotes]);

  const duration = (start, end) => {
    const start_time = moment(start);
    const end_time = moment(end);

    // get the difference between the moments
    const diff = end_time.diff(start_time);

    //express as a duration
    const diffDuration = moment.duration(diff);

    return `${diffDuration.hours() ? `${diffDuration.hours()} hours` : ""} ${diffDuration.minutes() ? `${diffDuration.minutes()} minutes` : ""
      }`;
  };

  const openSliders = (id) => {
    setOpenModal(id);
  };
  const settings = {
    dots: true,
    adaptiveHeight: true,
  };


  return (
    <>
      {!errorItems && !isEmpty(bookingQuotes) && !isEmpty(available) ? (
        <div className="items">
          {_.sortBy(bookingQuotes, "Name").map((booking, i) => (
            <div key={i} className="productItem row align-items-center">
              <div className=" col-12 col-lg-10">
                <div className="info">
                  <div className="name">{booking.Configurations[0].Name}</div>
                  <div
                    className="image mainImage"
                    style={{
                      cursor:
                        booking.Images && booking.Images.length > 0
                          ? "pointer"
                          : "default",
                    }}
                    onClick={() =>
                      booking.Images.length > 0 ? openSliders(booking.Id) : null
                    }
                  >
                    {booking.Images && booking.Images.length > 0 && (
                      <div className="zoomIn">
                        <FontAwesomeIcon icon={faSearchPlus} />
                      </div>
                    )}
                    <img
                      width={200}
                      height="auto"
                      src={booking.Images ? booking.Images[0].Url : DefaultImg}
                    />
                  </div>
                  <Modal
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    size="lg"
                    show={booking.Id === openModal}
                    onHide={() => setOpenModal("")}
                    className="imageSliders"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title-vcenter">
                        {booking.Name}
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Slider {...settings}>
                        {booking.Images &&
                          booking.Images.length > 0 &&
                          booking.Images.map((item, i) => {
                            return (
                              <div key={i}>
                                <img className="image" src={item.Url} />
                              </div>
                            );
                          })}
                      </Slider>
                    </Modal.Body>
                  </Modal>
                  {booking.IndustryCategoryGroups[0] === 3 ? (
                    <div className="qty d-flex">
                      <Form.Label>{t("quantity")}: &nbsp;</Form.Label>
                      <Form.Control
                        onChange={(e) =>
                          changeQuantity(e.target.value, booking.id)
                        }
                        type="number"
                        defaultValue={2}
                      />
                    </div>
                  ) : (
                    booking.Configurations[0].Quotes && (
                      <div className="mb-2">
                        <div className="qty">
                          {booking.IndustryCategoryGroups[0] !== 0 ? (
                            <>
                              <div className="d-flex align-items-center">
                                <Form.Label>
                                  {t("start_time", {
                                    time: moment(
                                      booking.Configurations[0].Quotes[0]
                                        .Commence
                                    ).format("MMMM Do YYYY hh:mm A"),
                                  })}
                                  &nbsp;
                                </Form.Label>
                                <Form.Select className="timeSelect" onChange={(e) => selectQuote(booking.Configurations[0].Quotes[e.target.value])}>
                                  {booking.Configurations[0].Quotes.map((quote, i) => {
                                    return (
                                      <option key={i} value={i}>{moment(quote.Commence)
                                        .locale(lang)
                                        .format("LT")}
                                      </option>
                                    )
                                  })}
                                </Form.Select>
                              </div>
                              <div>
                                {t("duration")}:{" "}
                                {duration(
                                  booking.Configurations[0].Quotes[0].Commence,
                                  booking.Configurations[0].Quotes[0].Conclude
                                )}
                              </div>
                            </>
                          ) : (
                            <>
                              <div>
                                {t("check_in_date", {
                                  date: moment(
                                    booking.Configurations[0].Quotes[0].Commence
                                  ).format("MMMM Do YYYY hh:mm A"),
                                })}
                              </div>
                              <div>
                                {t("check_out_date", {
                                  date: moment(
                                    booking.Configurations[0].Quotes[0].Conclude
                                  ).format("MMMM Do YYYY hh:mm A"),
                                })}
                              </div>
                            </>
                          )}
                        </div>
                        <div className="paxCount fw-bold">
                          {booking.Configurations[0].Pax.Adults > 0 &&
                            t("adults_count", {
                              adults: booking.Configurations[0].Pax.Adults,
                            })}{" "}
                          &nbsp;
                          {booking.Configurations[0].Pax.Children > 0 &&
                            t("children_count", {
                              children: booking.Configurations[0].Pax.Children,
                            })}{" "}
                          &nbsp;
                          {booking.Configurations[0].Pax.Seniors > 0 &&
                            t("adults_count", {
                              seniors: booking.Configurations[0].Pax.Seniors,
                            })}
                        </div>
                      </div>
                    )
                  )}
                  {booking.Configurations[0].Quotes && (
                    <>
                      <div className="price">
                        {t("price")}: &nbsp;
                        {booking.TxCurrencyCode === "JPY" ? "¥" : ""}
                        {booking.Configurations[0].Quotes && !isEmpty(totalPrice)
                          ? getPrice(
                            booking.Id,
                            selectedQuote ? selectedQuote.TotalPrice : booking.Configurations[0].Quotes[0].TotalPrice
                          )
                          : formatMoney(
                            selectedQuote ? selectedQuote.TotalPrice : booking.Configurations[0].Quotes[0].TotalPrice
                          )}
                      </div>
                    </>
                  )}
                  {booking.Extras &&
                    booking.IndustryCategoryGroups[0] !== 3 &&
                    booking.Extras.length > 0 && (
                      <div className="extras">
                        <Form.Label>Extras: &nbsp;</Form.Label>
                        {booking.Extras.map((extra, i) => {
                          return (
                            <div className="extraItem" key={i}>
                              <Form.Check
                                type="checkbox"
                                label={`${extra.Name} ¥${extra.TotalCost}`}
                                onChange={() =>
                                  selectedExtras(
                                    extra,
                                    booking,
                                    event.target.checked
                                  )
                                }
                              />
                            </div>
                          );
                        })}
                      </div>
                    )}
                  {booking.LongDescription && (
                    <>
                      <div
                        className={`desc ${descMore.length > 0 && descMore.includes(booking.Id)
                          ? "active"
                          : ""
                          }`}
                        id={booking.Id}
                        ref={bookingQuotes?.length > 1 ? (el) => (descRef.current[i] = el) : descNode}
                        dangerouslySetInnerHTML={{
                          __html: booking.LongDescription,
                        }
                        }
                      ></div>
                      {scrollable.includes(booking.Id) && (
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            seeMore(booking.Id);
                          }}
                          className="seeMore"
                        >
                          + {t("see_more")}
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
              <div className="action col-12 col-lg-2">
                {booking.Configurations[0].Quotes ? (
                  <Button
                    variant="primary"
                    onClick={() => submitBooking(booking)}
                  >
                    {onRequest === "true"
                      ? t("request_to_book")
                      : (service?.IndustryCategoryGroups && service.IndustryCategoryGroups[0] === 1 ? t('book_now_activ') : service.IndustryCategoryGroups[0] === 3 ? t('book_now_goods') : t('book_now'))}
                  </Button>
                ) : (
                  <p>{service?.IndustryCategoryGroups && service.IndustryCategoryGroups[0] === 1 ? t('not_available_activ') : service.IndustryCategoryGroups[0] === 3 ? t('not_available_goods') : t('not_available')}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h5 className="text-center">{service?.IndustryCategoryGroups && service.IndustryCategoryGroups[0] === 1 ? t('not_available_activ') : service.IndustryCategoryGroups[0] === 3 ? t('not_available_goods') : t('not_available')}</h5>
      )}

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{t("modal_header")}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          dangerouslySetInnerHTML={{ __html: t("modal_desc") }}
        ></Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={goToRequestBook}>
            {t("confirm")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ProductItems.propTypes = propTypes;

export default ProductItems;
