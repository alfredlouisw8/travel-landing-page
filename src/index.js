import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import RequestBook from "./pages/RequestBook";
import Invoice from "./pages/Invoice";

ReactDOM.render(
	<React.StrictMode>
		<CartProvider>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<App />}>
						<Route path="/" element={<Products />} />
						<Route exact path="product" element={<ProductDetail />} />
						<Route path="request-book" element={<RequestBook />} />
						<Route path="success" element={<Invoice />} />
					</Route>
				</Routes>
			</BrowserRouter>
			,
		</CartProvider>
		,
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
