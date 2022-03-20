import React, { useEffect, useState } from "react";
import axios from "axios";
import * as _ from "lodash";
import { Row, Col, Form, Button, Table } from "react-bootstrap";
import {
  useNavigate,
  useOutletContext,
  useSearchParams,
} from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { useCart } from "react-use-cart";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faListDots } from "@fortawesome/free-solid-svg-icons";

import {
  bodyRequest,
  headers,
  quoteRequest,
  disablePastDate,
} from "../../helpers/utils";
import DefaultImg from "../../assets/images/no_image.png";
import Guest from "../../assets/images/guest.png";
import Night from "../../assets/images/night.png";
import { endpoints } from "../../helpers/endpoints";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Map from "../../components/Maps";

const ProductDetail = () => {
  const [service, setService] = useState();
  const [bookingQuotes, setBookingQuotes] = useState([]);
  const [skeletonShow, setSkeletonShow] = useState("block");
  const [detailShow, setDetailShow] = useState("block");
  const [productItemShow, setProductItemShow] = useState("none");
  const [skeletonItemShow, setSkeletonItemShow] = useState("none");

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [language] = useOutletContext();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const curr = new Date();
  const date = curr.toISOString().substr(0, 10);
  const detailRequest = bodyRequest;

  detailRequest.request.Language = `${language}-JP`;
  quoteRequest.request.Language = `${language}`;

  detailRequest.request.Filter.Ids = [id];

  useEffect(() => {
    setSkeletonShow("block");
    setDetailShow("none");
    setProductItemShow("none");

    detailRequest.request.Output.Children = {
      Output: {
        CommonContent: {
          All: true,
        },
        Features: true,
        Rating: true,
        Reviews: {
          IncludeFullDescription: true,
          IncludeShortReview: true,
          MaxReturnCount: 10,
          MaxReturnCountSpecified: true,
        },
        Availability: {
          StartDate: new Date(),
          NumberOfDays: 7,
          MergeMethod: 2,
          FlagCampaign: true,
        },
      },
      Children: {
        Filter: {
          Ids: null,
          Type: 4,
        },
      },
    };
    axios
      .post(endpoints.search, detailRequest, { headers: headers })
      .then((response) => {
        setService(response.data.Entities[0]);
        setSkeletonShow("none");
        setDetailShow("block");
      });
  }, [searchParams, location]);

  useEffect(() => {
    const onReq = searchParams.get("on_req");
    if (
      service &&
      service.IndustryCategoryGroups[0] === 3 &&
      onReq === "false"
    ) {
      getQuote();
    }
  }, [service]);

  const getQuote = (values) => {
    quoteRequest.request.Configurations[0].Pax.Adults =
      parseInt(values && values.pax) || 2;
    quoteRequest.request.CommencementDate =
      (values && values.date) || new Date();
    quoteRequest.request.Duration = parseInt(values && values.duration) || 1;
    console.log(quoteRequest);
    if (service && service.Children.length > 0) {
      setBookingQuotes([]);
      service.Children.map((children, i) => {
        quoteRequest.request.IndustryCategoryGroup =
          children.IndustryCategoryGroups[0];
        quoteRequest.request.IndustryCategory = children.IndustryCategory;
        quoteRequest.request.Configurations[0].ProductId = children.Id;
        setSkeletonItemShow("block");

        axios
          .post(endpoints.bookingQuote, quoteRequest, { headers: headers })
          .then((response) => {
            const mergeData = { ...service.Children[i], ...response.data };
            mergeData.id = i + 1;
            mergeData.price =
              response.data.Configurations[0].Quotes?.TotalPrice;
            setBookingQuotes((data) => [...data, mergeData]);

            setProductItemShow("block");
            setSkeletonItemShow("none");
          });
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = {
      date: e.target[0] ? e.target[0].value : "",
      duration: e.target[1] ? e.target[1].value : 1,
      pax: e.target[2] ? e.target[2].value : 2,
    };
    getQuote(values);
  };

  function getServiceType() {
    let serviceType = t("accommodation");
    if (service && service.IndustryCategoryGroups) {
      switch (service.IndustryCategoryGroups[0]) {
        case 0:
          serviceType = t("accommodation");
          break;
        case 1:
          serviceType = t("activity");
          break;
        case 2:
          serviceType = t("restaurant");
          break;
        case 3:
          serviceType = t("produce");
          break;
        default:
          return t("accommodation");
      }
    }

    return serviceType;
  }

  const settings = {
    dots: true,
  };

  const { addItem } = useCart();
  return (
    <div className="container">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate("/");
        }}
        className="back"
      >
        <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
        Go Back
      </a>
      <Row className="product">
        <div className="skeletonWrapper" style={{ display: skeletonShow }}>
          <SkeletonTheme>
            <Skeleton height={35} className="mb-4" />
            <div className="row">
              <div className="col-6 offset-3">
                <Skeleton height={300} className="mb-3" />
              </div>
            </div>
            <Skeleton count={4} className="mb-2" />

            <Skeleton height={32} width="30%" className="mb-2 mt-4" />
            <div className="row">
              <div className="col-3">
                <Skeleton height={32} />
              </div>
              <div className="col-3">
                <Skeleton height={32} />
              </div>
              <div className="col-3">
                <Skeleton height={32} />
              </div>
              <div className="col-3">
                <Skeleton height={32} />
              </div>

              <Skeleton height={32} width="20%" className="mb-3 mt-5" />
              <Skeleton count={6} height={30} className="mb-3" />

              <Skeleton height={32} width="20%" className="mb-3 mt-5" />
              <Skeleton height={400} className="mb-3" />
            </div>
          </SkeletonTheme>
        </div>
        {service && (
          <Col
            xs={12}
            className="productWrapper"
            style={{ display: { detailShow } }}
          >
            <div className="serviceType">{getServiceType()}</div>
            <h2 className="title mb-5">{service.Name}</h2>
            <div className="carousel">
              {service.Images !== null ? (
                <Slider {...settings}>
                  {service.Images.map((service, i) => {
                    return (
                      <div key={i}>
                        <img className="image" src={service.Url} />
                      </div>
                    );
                  })}
                </Slider>
              ) : (
                <img src={DefaultImg} />
              )}
            </div>
            <div
              className="description mb-3"
              dangerouslySetInnerHTML={{ __html: service.LongDescription }}
            ></div>
            <div className="checkPrice mb-4">
              <h4>{t("check_price")}</h4>
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between">
                  <div className="d-flex">
                    {service &&
                    service.IndustryCategoryGroups &&
                    service.IndustryCategoryGroups[0] !== 3 ? (
                      <div className="formDate">
                        <Form.Control
                          className="me-2"
                          type="date"
                          defaultValue={date}
                          min={disablePastDate()}
                        />
                      </div>
                    ) : (
                      <div className="formCategories">
                        <div className="icon">
                          <FontAwesomeIcon icon={faListDots} />
                        </div>
                        <Form.Select>
                          <option>Diary</option>
                          <option>Wine</option>
                        </Form.Select>
                      </div>
                    )}

                    {service &&
                      service.IndustryCategoryGroups &&
                      service.IndustryCategoryGroups[0] === 0 && (
                        <div className="formIcon">
                          <div className="icon">
                            <img src={Night} />
                          </div>
                          <Form.Control
                            className="me-2"
                            defaultValue={1}
                            type="number"
                            name="duration"
                          />
                        </div>
                      )}
                    {service &&
                      service.IndustryCategoryGroups &&
                      service.IndustryCategoryGroups[0] !== 3 && (
                        <div className="formIcon">
                          <div className="icon">
                            <img src={Guest} />
                          </div>
                          <Form.Control
                            className="me-2"
                            defaultValue={2}
                            type="number"
                            name="pax"
                          />
                        </div>
                      )}
                  </div>
                  <div>
                    <Button type="submit" variant="secondary">
                      {t("search")}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
            <div
              className="availableProducts mb-4"
              style={{ display: productItemShow }}
            >
              <div className="sectionTitle">
                <span>{t("available_products")}</span>
              </div>
              <div className="items">
                {_.sortBy(bookingQuotes, "Name").map((children, i) => (
                  <div key={i} className="productItem row align-items-center">
                    <div className=" col-12 col-lg-10">
                      <div className="info">
                        <div className="name">
                          {children.Configurations[0].Name}
                        </div>
                        <div className="image">
                          <img
                            width={100}
                            height="auto"
                            src={
                              children.Images
                                ? children.Images[0].Url
                                : DefaultImg
                            }
                          />
                        </div>
                        <div className="price">
                          {t("price")}: &nbsp;
                          {children.TxCurrencyCode === "JPY" ? "¥" : ""}
                          {children.Configurations[0].Quotes &&
                            children.Configurations[0].Quotes[0].TotalPrice}
                        </div>
                        <div
                          className="desc"
                          dangerouslySetInnerHTML={{
                            __html: children.LongDescription,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className="action col-12 col-lg-2">
                      <Button
                        variant="primary"
                        onClick={() => addItem(children)}
                      >
                        {t("book_now")}
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="productSkeleton mb-4"
              style={{ display: skeletonItemShow }}
            >
              <Skeleton height={30} width="30%" className="mb-3" />

              {[...Array(2)].map((i) => (
                <div key={i} className="row align-items-center mb-3">
                  <div className="col-4">
                    <Skeleton height={20} width="50%" className="mb-2" />
                    <Skeleton height={80} width="30%" className="mb-2" />
                    <Skeleton
                      height={15}
                      count={3}
                      width="70%"
                      className="mb-2"
                    />
                  </div>
                  <div className="col-1 ms-auto">
                    <Skeleton height={35} width="100%" />
                  </div>
                </div>
              ))}
            </div>
            <div className="info mb-4">
              <div className="sectionTitle">
                <span>{t("basic_info")}</span>
              </div>
              <Table borderless responsive>
                <tbody>
                  <tr>
                    <td>{t("name")}</td>
                    <td>{service.Name}</td>
                  </tr>
                  <tr>
                    <td>{t("price")}</td>
                    <td>{service.Availability.Calendar.LowestRate}</td>
                  </tr>
                  <tr>
                    <td>{t("address")}</td>
                    <td>
                      {service.PhysicalAddress.Line1},{" "}
                      {service.PhysicalAddress.City},{" "}
                      {service.PhysicalAddress.PostCode},{" "}
                      {service.PhysicalAddress.State}
                    </td>
                  </tr>
                  <tr>
                    <td>{t("phone")}</td>
                    <td>{service.MainPhone.FullPhoneNumberLocalised}</td>
                  </tr>
                  <tr>
                    <td>{t("website")}</td>
                    <td>{service.Website || "No Public Website"}</td>
                  </tr>
                  <tr>
                    <td>{t("email")}</td>
                    <td>{service.PublicEmail}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
            {service.Geocodes !== null && (
              <div className="map">
                <div className="sectionTitle">
                  <span>{t("map")}</span>
                </div>
                <div className="mapContainer">
                  <Map positions={service.Geocodes} />
                </div>
              </div>
            )}
          </Col>
        )}
      </Row>
    </div>
  );
};

export default ProductDetail;
