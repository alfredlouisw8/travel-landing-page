import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import Guest from "../../../../assets/images/guest.png";
import Night from "../../../../assets/images/night.png";

const propTypes = {
  service: PropTypes.object,
  handleSubmit: PropTypes.func,
  date: PropTypes.any,
  disablePastDate: PropTypes.func,
};

const CheckPrice = ({ service, handleSubmit, date, disablePastDate }) => {
  const { t } = useTranslation();

  return (
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
                  <option>Dairy</option>
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
