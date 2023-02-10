import React from "react";
// import { Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import {
// 	faMapMarkerAlt,
// 	faSuitcaseRolling,
// 	faExternalLink,
// } from "@fortawesome/free-solid-svg-icons";

// import Logo from "../../assets/images/logo.svg";
// import Img from "../../assets/images/nav-image.webp";
// import ImgLg from "../../assets/images/nav-image.webp";
// import Img2 from "../../assets/images/nav-image-2.webp";

const MobileHeader = () => {
	return (
		<div id="header" className="newLayout">
			<header id="siteHeader" role="banner">
				<div className="logo">
					<h1 className="mb-0">
						<a href="https://www.welcome.city.yokohama.jp/">
							<img
								alt="【公式】横浜市観光情報サイト - Yokohama Official Visitors' Guide"
								src="https://www.welcome.city.yokohama.jp/common/img/logo.png"
								width="236"
								height="50"
							/>
						</a>
					</h1>
				</div>
			</header>{" "}
			<nav id="globalNav" role="navigation">
				<div id="mainNav">
					<ul>
						<li id="icEvent">
							<a href="https://www.welcome.city.yokohama.jp/eventinfo/">
								<br className="ifpc" />
								イベント情報
							</a>
						</li>{" "}
						<li id="icSpot" className="navToggleWrap">
							<a
								href="https://www.welcome.city.yokohama.jp/spot/"
								className="mainNavTtl"
							>
								<br className="ifpc" />
								スポット
							</a>
							<div className="mainNavInWrap_2">
								<ul className="mainNavIn2">
									<li>
										<a href="https://www.welcome.city.yokohama.jp/spot/">
											観光スポット一覧
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/spot/area/">
											エリア別観光スポット
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/courses/">
											オススメコース
										</a>
									</li>
									<li className="navMyplan">
										<a href="https://www.welcome.city.yokohama.jp/myplan/">
											My Plan(マイプラン)
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/chinatown/">
											横浜中華街へ行こう
										</a>
									</li>
								</ul>
							</div>
						</li>{" "}
						<li id="icSearch">
							<div className="js-modal__btn">
								<small>サイト内検索</small>
							</div>

							<div className="js-modal__bg">
								<div className="js-modal__main">
									<br />

									<div className="siteSearch">
										<form
											action="https://search.yahoo.co.jp/search"
											method="get"
											target="_blank"
										>
											<input type="text" name="p" placeholder="サイト内検索" />
											<input type="hidden" name="fr" value="ysiw" />
											<input type="hidden" name="ei" value="utf-8" />
											<input
												type="submit"
												value="検索"
												style={{ margin: "0" }}
											/>
											<input
												name="vs"
												type="hidden"
												value="welcome.city.yokohama.jp"
												checked="checked"
											/>
										</form>
									</div>

									<p className="js-modal__btn--close"></p>
								</div>
							</div>
						</li>{" "}
						<li id="sideOpen">メニュー</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default MobileHeader;
