import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import {
	//useNavigate,
	useOutletContext,
	useSearchParams,
} from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { isEmpty } from "lodash";
import { produce } from "immer";

import {
	bodyRequest,
	headers,
	quoteRequest,
	distributorQuick,
	distributorRequest,
} from "../../helpers/utils";
import DefaultImg from "../../assets/images/no_image.png";
import { endpoints } from "../../helpers/endpoints";

import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import "./style.scss";
import Map from "../../components/Maps";
import ProductItems from "./components/ProductItems";
import BasicInfo from "./components/BasicInfo";
import SkeletonDetail from "./components/SkeletonDetail";
import SkeletonItems from "./components/SkeletonItems";
import CheckPrice from "./components/CheckPrice";

const ProductDetail = () => {
	const [service, setService] = useState();
	const [bookingQuotes, setBookingQuotes] = useState([]);
	const [detailShow, setDetailShow] = useState(false);
	const [productItemShow, setProductItemShow] = useState("none");
	const [skeletonItemShow, setSkeletonItemShow] = useState("none");
	const [onRequest, setOnRequest] = useState("true");
	const [quotesInfo, setQuotesInfo] = useState({});
	const [errorItems, setErrorItems] = useState(false);
	const [totalPrice, setTotalPrice] = useState([]);
	const [searchParams] = useSearchParams();
	const id = searchParams.get("id");
	const [language] = useOutletContext();
	const { t } = useTranslation();
	//const navigate = useNavigate();

	const today = new Date();
	const date = new Date(today);
	date.setDate(date.getDate() + 1);

	const detailRequest = bodyRequest;

	detailRequest.request.Filter.Ids = [id];

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });

		const langParams = searchParams.get("lang");
		detailRequest.request.Language = language === "en" ? "en-US" : "jp-JP";
		quoteRequest.request.Language = language === "en" ? "en-US" : "jp-JP";
		if (langParams) {
			detailRequest.request.Language = language === "en" ? "en-US" : "jp-JP";
			quoteRequest.request.Language = language === "en" ? "en-US" : "jp-JP";
		}

		setDetailShow(false);
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
		const onReq = searchParams.get("on_req");
		if (onReq === "true") detailRequest.request.ShortName = distributorRequest;
		else detailRequest.request.ShortName = distributorQuick;

		if (!langParams || language === langParams) {
			axios
				.post(endpoints.search, detailRequest, { headers: headers })
				.then((response) => {
					setService(response.data.Entities[0]);
					setDetailShow(true);
				});
		}
	}, [searchParams, location, language]);

	useEffect(() => {
		setBookingQuotes([]);
	}, []);

	useEffect(() => {
		const onReq = searchParams.get("on_req");
		setOnRequest(onReq);
		if (
			service &&
			service.IndustryCategoryGroups[0] === 3 &&
			onReq === "false"
		) {
			getQuote();
		}
	}, [service]);

	useEffect(() => {
		setBookingQuotes(bookingQuotes.sort((a, b) => a.Name - b.Name));
	}, [bookingQuotes]);

	const getQuote = (values) => {
		setProductItemShow("none");

		quoteRequest.request.Configurations[0].Pax.Adults =
			parseInt(values && values.pax) || 1;
		quoteRequest.request.Configurations[0].Pax.Children =
			parseInt(values && values.children) || 0;
		if (service.IndustryCategoryGroups[0] === 1) {
			quoteRequest.request.Configurations[0].Pax.Seniors =
				parseInt(values && values.seniors) || 0;
		} else {
			quoteRequest.request.Configurations[0].Pax.Seniors = 0;
		}
		quoteRequest.request.CommencementDate = values?.date || new Date();
		quoteRequest.request.Duration = parseInt(values && values.duration) || null;

		console.log(quoteRequest.request);

		setBookingQuotes([]);

		if (service && service.Children.length > 0) {
			const onReq = searchParams.get("on_req");
			if (onReq === "true") quoteRequest.request.ShortName = distributorRequest;
			else quoteRequest.request.ShortName = distributorQuick;
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
						mergeData.id = response.data.Configurations[0].ProductId;
						mergeData.quantity = 1;
						mergeData.price = response.data.Configurations[0].Quotes
							? response.data.Configurations[0].Quotes[0].TotalPrice
							: null;
						setBookingQuotes((data) => [...data, mergeData]);

						setProductItemShow("block");
						setSkeletonItemShow("none");
					})
					.catch((error) => {
						console.log(error);
						setErrorItems(true);
						setProductItemShow("block");
						setSkeletonItemShow("none");
					});
			});
		}
	};

	const handleSubmit = (e, date) => {
		e.preventDefault();
		let values = null;
		if (service.IndustryCategoryGroups[0] !== 3) {
			values = {
				date: e.target[0] ? new Date(new Date(date).setHours(0, 0, 0, 0)) : "",
				duration:
					service.IndustryCategoryGroups[0] === 0
						? e.target.duration.value
						: null,
				pax: e.target.pax.value,
				children: service.Settings.PresentChildren
					? e.target.children.value
					: "",
				seniors: service.Settings.PresentSeniors ? e.target.senior.value : "",
			};
			setQuotesInfo(values);
		}

		getQuote(values);
	};

	const changeQuantity = (value, id) => {
		bookingQuotes.map((item) => {
			if (item.id === id) {
				item.quantity = value;
				const price = value * item.Configurations[0].Quotes[0].TotalPrice;
				if (!isEmpty(totalPrice)) {
					totalPrice.map((item) => {
						if (item.id === id) {
							setTotalPrice(
								produce((draft) => {
									const dataPrice = draft.find((item) => item.id === id);
									dataPrice.totalPrice = price;
								})
							);
						} else {
							setTotalPrice((prev) => [...prev, { id: id, totalPrice: price }]);
						}
					});
				} else {
					setTotalPrice((prev) => [...prev, { id: id, totalPrice: price }]);
				}
			}
		});
	};

	const settings = {
		dots: true,
		adaptiveHeight: true,
	};

	const getServiceType = () => {
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
	};

	const calendarUpdate = (date) => {
		detailRequest.request.Output.Availability.StartDate = date;

		axios
			.post(endpoints.search, detailRequest, { headers: headers })
			.then((response) => {
				setService(response.data.Entities[0]);
				setDetailShow(true);
			});
	};

	return (
		<>
			<div className="container">
				{/* <a
					href="#"
					onClick={(e) => {
						e.preventDefault();
						navigate("/");
					}}
					className="back"
				>
					<FontAwesomeIcon icon={faArrowLeft} className="me-2" />
					{t("go_back")}
				</a> */}
				<Row className="product">
					<div
						className="skeletonWrapper"
						style={{ display: !detailShow ? "block" : "none" }}
					>
						<SkeletonDetail />
					</div>
					{service && (
						<Col
							xs={12}
							className="productWrapper"
							style={{ display: detailShow ? "block" : "none" }}
						>
							<div className="serviceType w-100">{getServiceType()}</div>
							<h2 className="title mb-5 font nara-season">{service.Name}</h2>
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
								className="description mb-3 text-black"
								dangerouslySetInnerHTML={{ __html: service.LongDescription }}
							></div>
							<CheckPrice
								service={service}
								handleSubmit={handleSubmit}
								calendarUpdate={calendarUpdate}
							/>
							<div
								className="availableProducts mb-4"
								style={{ display: productItemShow }}
							>
								<div className="sectionTitle">
									<span>
										{service?.IndustryCategoryGroups &&
										service.IndustryCategoryGroups[0] === 1
											? t("available_products_activity")
											: service.IndustryCategoryGroups[0] === 3
											? t("available_products_goods")
											: t("available_products")}
									</span>
								</div>
								<ProductItems
									bookingQuotes={bookingQuotes}
									changeQuantity={changeQuantity}
									onRequest={onRequest}
									language={language}
									service={service}
									quotesInfo={quotesInfo}
									error={errorItems}
									totalPrice={totalPrice}
								/>
							</div>
							<SkeletonItems skeletonItemShow={skeletonItemShow} />
							<div className="info mb-4">
								<div className="sectionTitle">
									<span>{t("basic_info")}</span>
								</div>
								<BasicInfo service={service} />
							</div>
							{service.Geocodes !== null && (
								<div className="map">
									<div className="sectionTitle">
										<span>{t("map")}</span>
									</div>
									<div className="mapContainer">
										<Map positions={service} />
									</div>
								</div>
							)}
						</Col>
					)}
				</Row>
			</div>
		</>
	);
};

export default ProductDetail;
