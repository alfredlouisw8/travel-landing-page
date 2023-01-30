import React from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const propTypes = {
	handleOnchange: PropTypes.func,
};

const LanguageSelector = ({ handleOnchange }) => {
	return (
		<Form.Select onChange={(e) => handleOnchange(e)}>
			<option value="jp">日本語</option>
			<option value="en">English</option>
		</Form.Select>
	);
};

LanguageSelector.propTypes = propTypes;

export default LanguageSelector;
