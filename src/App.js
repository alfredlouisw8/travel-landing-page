import React, { useState, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { i18n } from "./lang/i18n";
import { ToastContainer } from "react-toastify";
import moment from "moment";
import "moment/locale/ja";

//import Footer from "./components/Footer";
//import Navigation from "./components/Navigation";
import Cart from "./components/Cart";

import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./pages/Products/components/LanguageSelector";

function App() {
	const [language, setLanguage] = useState("jp");
	const [searchParams, setSearchParams] = useSearchParams();
	const langParams = searchParams.get("lang");
	const idParams = searchParams.get("id");
	const { t } = useTranslation();

	useEffect(() => {
		i18n.changeLanguage("jp");
	}, []);

	useEffect(() => {
		setLanguage(langParams);
		i18n.changeLanguage(langParams);

		const langLocale = langParams === "jp" ? "ja" : langParams;
		moment.locale(langLocale);
	}, [langParams]);

	const handleOnchange = (e) => {
		e.preventDefault();
		setLanguage(e.target.value);
		i18n.changeLanguage(e.target.value);
		searchParams.set("lang", e.target.value);
		setSearchParams(searchParams);
	};

	return (
		<div className="App my-4">
			<div className="container">
				{/* <div className="content">
					<button
						className={`btn ${language === "en" ? "active" : ""}`}
						value="en"
						onClick={handleOnclick}
					>
						English
					</button>
					<button
						className={`btn ${language === "jp" ? "active" : ""}`}
						value="jp"
						onClick={handleOnclick}
					>
						日本語
					</button>
				</div> */}
				<div className="breadcrumb w-100">
					<div>
						<a href="https://yamatoji.nara-kankou.or.jp/">{t("home")}</a>
						<span className="separator">|</span>
						<span>{t("list")}</span>
						{idParams && (
							<>
								<span className="separator">|</span>
								<span>{t("details")}</span>
							</>
						)}
					</div>
					<div>
						<LanguageSelector handleOnchange={handleOnchange} />
					</div>
				</div>
			</div>
			<Outlet context={[language]} />
			<Cart language={language} />
			<ToastContainer />
		</div>
	);
}

export default App;
