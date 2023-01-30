import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import { Form, Button } from "react-bootstrap";
import moment from "moment";
import { useTranslation } from "react-i18next";
import Calendar from "react-calendar";
import { isEmpty } from "lodash";

import { formatMoney } from "../../../../helpers/formatters";
import "react-calendar/dist/Calendar.css";
import "./style.scss";

import Guest from "../../../../assets/images/guest.png";
import Night from "../../../../assets/images/night.png";

const propTypes = {
	service: PropTypes.object,
	handleSubmit: PropTypes.func,
	calendarUpdate: PropTypes.func,
};

const CheckPrice = ({ service, handleSubmit, calendarUpdate }) => {
	const { t } = useTranslation();
	const [showCalendar, setShowCalendar] = useState(false);
	const [date, setDate] = useState();
	const [dailyRates, setDailyRates] = useState([]);

	useEffect(() => {
		const minDate = setMinDate();
		setDate(minDate);
		checkDatePrice();
	}, []);

	useEffect(() => {
		checkDatePrice();
	}, [service]);

	const setMinDate = () => {
		return new Date();
	};

	const checkDatePrice = () => {
		const rates = [];
		service.Children.map((child) => {
			if (child.Availability.Calendar.DailyRates) {
				child.Availability.Calendar.DailyRates.map((rate) => {
					if (rate.Rate) {
						if (!rates.find((item) => item.Date === rate.Date)) {
							rates.push(rate);
						}
					}
				});
			}
		});

		setDailyRates(rates);
	};

	const onChange = (date) => {
		setDate(date);
		setShowCalendar(false);
	};

	return (
		<div
			className={`checkPrice mb-4 ${
				service?.IndustryCategoryGroups &&
				service.IndustryCategoryGroups[0] === 3 &&
				"d-none"
			}`}
		>
			<h4>
				{service?.IndustryCategoryGroups &&
				service.IndustryCategoryGroups[0] === 1
					? t("check_price_activ")
					: service.IndustryCategoryGroups[0] === 3
					? t("check_price_goods")
					: t("check_price")}
			</h4>
			<form onSubmit={(e) => handleSubmit(e, date)}>
				<div className="d-flex justify-content-between">
					<div className="d-flex flex-wrap">
						{service &&
						service.IndustryCategoryGroups &&
						service.IndustryCategoryGroups[0] !== 3 ? (
							<div className="formDate mb-3 mb-lg-0">
								<Form.Label>{t("date")}</Form.Label>
								<Form.Control
									type="input"
									name="date"
									placeholder={t("date_placeholder")}
									readOnly
									value={date && moment(date).format("LL")}
									onClick={() => setShowCalendar(!showCalendar)}
								/>
								<Calendar
									minDate={setMinDate()}
									onChange={(date) => onChange(date)}
									value={date}
									onActiveStartDateChange={(value) => {
										calendarUpdate(value.activeStartDate);
									}}
									tileContent={({ date }) => {
										let tile = <p className="mt-2">-</p>;
										!isEmpty(dailyRates) &&
											dailyRates.map((rate) => {
												if (
													new Date(rate.Date).setHours(0, 0, 0, 0) ===
														date.setHours(0, 0, 0, 0) &&
													rate.IsAvailable
												) {
													tile = (
														<p
															className="mt-2"
															style={{ fontSize: "12px" }}
														>{`¥${formatMoney(rate.Rate)}`}</p>
													);
												}
											});

										return tile;
									}}
									className={!showCalendar ? "hide" : ""}
								/>
							</div>
						) : (
							<div className="formCategories mb-3 mb-lg-0">
								<div className="icon">
									<FontAwesomeIcon icon={faListDots} />
								</div>
								<Form.Select>
									<option>{t("all_categories")}</option>
								</Form.Select>
							</div>
						)}

						{service &&
							service.IndustryCategoryGroups &&
							service.IndustryCategoryGroups[0] === 0 && (
								<div className="formGroup">
									<Form.Label>{t("duration")}</Form.Label>
									<div className="formIcon mb-3 mb-lg-0">
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
								</div>
							)}
						{service &&
							service.IndustryCategoryGroups &&
							service.IndustryCategoryGroups[0] !== 3 && (
								<>
									<div className="formGroup">
										<Form.Label>{t("adults")}</Form.Label>
										<div className="formIcon">
											<div className="icon">
												<img src={Guest} />
											</div>
											<Form.Control
												className="me-2"
												defaultValue={1}
												type="number"
												name="pax"
											/>
										</div>
									</div>
									{service.Settings.PresentChildren && (
										<div className="formGroup">
											<Form.Label>{t("children")}</Form.Label>
											<div className="formIcon">
												<div className="icon">
													<img src={Guest} />
												</div>
												<Form.Control
													className="me-2"
													defaultValue={0}
													type="number"
													name="children"
												/>
											</div>
										</div>
									)}{" "}
									{service.Settings.PresentSeniors && (
										<div className="formGroup">
											<Form.Label>{t("seniors")}</Form.Label>
											<div className="formIcon">
												<div className="icon">
													<img src={Guest} />
												</div>
												<Form.Control
													className="me-2"
													defaultValue={0}
													type="number"
													name="senior"
												/>
											</div>
										</div>
									)}
								</>
							)}
					</div>
					<div>
						<Button type="submit" variant="secondary" className="fw-bold">
							{t("search")}
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

CheckPrice.propTypes = propTypes;

export default CheckPrice;
