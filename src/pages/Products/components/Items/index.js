import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import DefaultImg from "../../../../assets/images/no_image.png";
import { formatMoney } from "../../../../helpers/formatters";

const propTypes = {
	services: PropTypes.array,
	goToDetail: PropTypes.func,
	loadMore: PropTypes.func,
	totalPage: PropTypes.number,
	totalPageOnRequest: PropTypes.number,
	currentPage: PropTypes.number,
	currentPageOnRequest: PropTypes.number,
	state: PropTypes.string,
};

const Items = ({
	services,
	goToDetail,
	loadMore,
	totalPage,
	totalPageOnRequest,
	state,
	currentPage,
	currentPageOnRequest,
}) => {
	const { t, i18n } = useTranslation();

	const [lang, setLang] = useState("jp");

	useEffect(() => {
		setLang(i18n.language);
	}, [i18n.language]);

	console.log(services);

	return (
		<Row>
			{services && services.length > 0 ? (
				services.map((service, i) => {
					return (
						<Col xs={12} key={i}>
							{/* <div className="item">
								<div
									className="image"
									onClick={(e) => {
										e.preventDefault();
										goToDetail(service.Id, service.OnRequestOnly);
									}}
								>
									<img
										src={
											service.Images !== null
												? service.Images[0].Url
												: DefaultImg
										}
										alt={service.Name}
									/>
								</div>
								<div className="info">
									<a
										href="#"
										onClick={(e) => {
											e.preventDefault();
											goToDetail(service.Id, service.OnRequestOnly);
										}}
									>
										<h6 className="title">{service.Name}</h6>
									</a>

									<div className="address">
										{service.PhysicalAddress.Line1},{" "}
										{service.PhysicalAddress.City},{" "}
										{service.PhysicalAddress.PostCode}
									</div>
									<div className="price">
										{service.Availability.Calendar.LowestRate &&
											(lang === "jp"
												? `¥${formatMoney(
														service.Availability.Calendar.LowestRate
												  )} から`
												: `From ¥${formatMoney(
														service.Availability.Calendar.LowestRate
												  )}`)}
									</div>
									<div
										className="desc"
										dangerouslySetInnerHTML={{
											__html: service.LongDescription,
										}}
									></div>
								</div>
								<div className="buttonWrapper">
									<Button
										className="w-100 primary-bg bordered bg-transparent font"
										variant="primary"
										onClick={() =>
											goToDetail(service.Id, service.OnRequestOnly)
										}
									>
										{t("view_details")}
									</Button>
								</div>
							</div> */}
							<div className="main mt-5 w-100" role="main">
								<div id="" className="hottopics">
									<div id="w_01" className="htBox area4 svelte-3jla95">
										<div
											className="htMainImg svelte-3jla95"
											onClick={(e) => {
												e.preventDefault();
												goToDetail(service.Id, service.OnRequestOnly);
											}}
										>
											<img
												src={
													service.Images !== null
														? service.Images[0].Url
														: DefaultImg
												}
												alt={service.Name}
											/>
										</div>
										<h3>
											<a>{service.Name}</a>
										</h3>
										<div className="htDataBox">
											<table>
												<tbody>
													<tr>
														<th>住所</th>
														<td>
															{service.PhysicalAddress.Line1},
															{service.PhysicalAddress.City},
															{service.PhysicalAddress.PostCode}
														</td>
													</tr>
													<tr>
														<th>価格（税込）</th>
														<td>
															{service.Availability.Calendar.LowestRate &&
																(lang === "jp"
																	? `¥${formatMoney(
																			service.Availability.Calendar.LowestRate
																	  )} から`
																	: `From ¥${formatMoney(
																			service.Availability.Calendar.LowestRate
																	  )}`)}
														</td>
													</tr>
													<tr>
														<th>電話</th>
														<td>
															{service.MainPhone
																? service.MainPhone.FullPhoneNumberLocalised
																: "-"}
														</td>
													</tr>
													<tr>
														<th>ファックス</th>
														<td>{service.Facsimile || "-"}</td>
													</tr>
													<tr>
														<th>ウェブサイト</th>
														<td>
															{service.Website && (
																<a href={service.Website}>{service.Website}</a>
															)}
														</td>
													</tr>
													<tr>
														<th>メール</th>
														<td>
															{service.PublicWebsite && (
																<a href={`mailto:${service.PublicWebsite}`}>
																	{service.PublicWebsite}
																</a>
															)}
														</td>
													</tr>
												</tbody>
											</table>
											<div className="htBtn">
												<a>
													<Button
														className="bg-transparent border-0"
														variant="primary"
														onClick={() =>
															goToDetail(service.Id, service.OnRequestOnly)
														}
													>
														{t("view_details")}
													</Button>
												</a>
											</div>
										</div>
										<div className="htTxtBox info desc svelte-3jla95">
											<p></p>
										</div>
									</div>
								</div>
							</div>
						</Col>
					);
				})
			) : (
				<h3 className="text-center">{t("not_found")}</h3>
			)}

			<div className="loadMore">
				{totalPage > 1 && totalPage > currentPage && state === "quick" && (
					<Button
						variant="secondary"
						className="w-100 fw-bold py-2"
						onClick={() => loadMore()}
					>
						{t("load_more")}
					</Button>
				)}
			</div>
			<div className="loadMoreRequest">
				{totalPageOnRequest > 1 &&
					totalPageOnRequest > currentPageOnRequest &&
					state === "request" && (
						<Button
							variant="secondary"
							className="w-100 fw-bold py-2"
							onClick={() => loadMore()}
						>
							{t("load_more")}
						</Button>
					)}
			</div>
		</Row>
	);
};

Items.propTypes = propTypes;

export default Items;
