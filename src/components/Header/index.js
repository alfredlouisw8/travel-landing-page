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

import "./style.scss";

const Header = () => {
	return (
		<div id="header" className="newLayout">
			<div className="bgB">
				<ul id="relatedNav" className="asidenav headaside in">
					<li className="active">
						<a href="https://www.welcome.city.yokohama.jp/">観光情報</a>
					</li>
					<li>
						<a
							href="https://business.yokohamajapan.com/mice/ja/"
							target="_blank"
							rel="noreferrer"
						>
							コンベンション情報
						</a>
					</li>
					<li>
						<a
							href="https://business.yokohamajapan.com/media/ja/"
							target="_blank"
							rel="noreferrer"
						>
							メディア・観光事業者
						</a>
					</li>
					<li>
						<a
							href="https://business.yokohamajapan.com/education/"
							target="_blank"
							rel="noreferrer"
						>
							教育旅行
						</a>
					</li>
					<li>
						<a
							href="https://www.welcome.city.yokohama.jp/cruise/"
							target="_blank"
							rel="noreferrer"
						>
							クルーズ
						</a>
					</li>
					<li>
						<a
							href="https://www.welcome.city.yokohama.jp/wedding/"
							target="_blank"
							rel="noreferrer"
						>
							ウェディング
						</a>
					</li>
					<li>
						<a
							href="https://business.yokohamajapan.com/member/"
							target="_blank"
							rel="noreferrer"
						>
							賛助会員
						</a>
					</li>
					<li>
						<a
							href="https://business.yokohamajapan.com/ja/"
							target="_blank"
							rel="noreferrer"
						>
							財団について
						</a>
					</li>
				</ul>
			</div>

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

					<div id="smallNav">
						<ul className="iconS">
							<li>
								<a
									href="https://www.facebook.com/welcome.city.yokohama"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fab fa-facebook-square" aria-hidden="true" />
								</a>
							</li>
							<li>
								<a
									href="https://twitter.com/hamako_yokohama"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fab fa-twitter" aria-hidden="true" />
								</a>
							</li>
							<li>
								<a
									href="https://www.instagram.com/yokohama_visitors_guide/"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fab fa-instagram" aria-hidden="true" />
								</a>
							</li>
							<li>
								<a
									href="https://www.youtube.com/channel/UCmrPc0dX9qA0MN8Es-zDiPg"
									target="_blank"
									rel="noreferrer"
								>
									<i className="fab fa-youtube" aria-hidden="true" />
								</a>
							</li>
						</ul>
						<p className="icAccessibility">
							<a href="/accessibility/">
								<i className="fa fa-wheelchair" aria-hidden="true" />
								<br className="ifpc" />
								バリアフリー情報
							</a>
						</p>
						<p className="icAccessibility">
							<a href="/faciliti/">
								<i className="far fa-eye" aria-hidden="true" />
								<br className="ifpc" />
								アクセシビリティ
							</a>
						</p>

						<div className="langSelect">
							<p className="langOpen btnToggle">
								<i className="fa fa-globe" aria-hidden="true" />
								<br className="ifpc" />
								Language
							</p>
							<div id="divLang" className="clmToggle">
								<div className="langA">
									<p>
										<a href="https://www.yokohamajapan.com">English</a>
									</p>
									<p>
										<a href="https://www.yokohamajapan.com/tc/">
											<span lang="zh-TW">繁體中文</span>
										</a>
									</p>
									<p>
										<a href="https://www.yokohamajapan.com/cn/">
											<span lang="zh-CN">简体中文</span>
										</a>
									</p>
									<p>
										<a href="https://www.yokohamajapan.com/kr/">
											<span lang="ko">한국어</span>
										</a>
									</p>
								</div>
								<div className="langB">
									<p className="langOpen">▼Machine Translation</p>
									<p>
										<a href="https://www.yokohamajapan.com/fr/">
											<span lang="fr">Français</span>
										</a>
									</p>
									フランス語語
									<p>
										<a href="https://www.yokohamajapan.com/es/">
											<span lang="es">Español</span>
										</a>
									</p>
									スペイン語
									<p>
										<a href="https://www.yokohamajapan.com/th/">
											<span lang="th">ไทย</span>
										</a>
									</p>
									タイ語
									<p>
										<a href="https://www.yokohamajapan.com/id/">
											<span lang="id">Bahasa Indonesia</span>
										</a>
									</p>
									インドネシア語
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<nav id="globalNav" role="navigation">
				<div id="mainNav">
					<ul>
						<li id="icNews" className="navToggleWrap">
							<span className="mainNavTtl">
								<br />
								最新情報
							</span>
							<div className="mainNavInWrap_2">
								<ul className="mainNavIn2">
									<li>
										<a href="https://www.welcome.city.yokohama.jp/topics/topics.php">
											トピックス
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/blog/">
											取材レポート
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/hottopics/">
											季節の特集
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/video/">
											動画で発見
										</a>
									</li>
									<li className="sns">SNS</li>
									<li>
										<a
											href="https://www.facebook.com/welcome.city.yokohama"
											target="_blank"
											rel="noreferrer"
											className="sns"
										>
											Facebook
										</a>
									</li>
									<li>
										<a
											href="https://twitter.com/hamako_yokohama"
											target="_blank"
											rel="noreferrer"
											className="sns"
										>
											Twitter
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/yokohama_visitors_guide/"
											target="_blank"
											rel="noreferrer"
											className="sns"
										>
											Instagram
										</a>
									</li>
									<li>
										<a
											href="https://www.youtube.com/channel/UCmrPc0dX9qA0MN8Es-zDiPg"
											target="_blank"
											rel="noreferrer"
											className="sns"
										>
											Youtube
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li id="icEvent">
							<a href="https://www.welcome.city.yokohama.jp/eventinfo/">
								<br className="ifpc" />
								イベント情報
							</a>
						</li>
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
						</li>
						<li id="icTabi" className="navToggleWrap">
							<span className="mainNavTtl">
								<br />
								旅の予約
							</span>
							<div className="mainNavInWrap_2">
								<ul className="mainNavIn2">
									<li>
										<a href="https://www.welcome.city.yokohama.jp/hotel/">
											ホテル・ツアー予約
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/tabi/">
											遊び・体験プラン
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/gourmet/">
											レストランガイド
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/gourmet/original.php">
											横浜発祥グルメ
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/gift/">
											横浜みやげ
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li id="icAsobi" className="navToggleWrap">
							<span className="mainNavTtl">
								<br />
								見る＆遊ぶ
							</span>
							<div className="mainNavInWrap_2">
								<ul className="mainNavIn2">
									<li>
										<a href="https://www.welcome.city.yokohama.jp/appeal/">
											横浜の魅力と楽しみ方
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/taiken/">
											横浜ならではの体験
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/ride/">
											陸海空 のりもので楽しむ
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/yakei/">
											横濱夜景スポット
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/flower/">
											横浜の花の名所
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/joshitabi/">
											横浜女子旅
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/otona/">
											横浜大人スタイル
										</a>
									</li>
									<li>
										<a
											href="https://www.welcome.city.yokohama.jp/beer/"
											target="_blank"
											rel="noreferrer"
										>
											Yokohama Beer Magazine
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/shinhakken/">
											横浜観光親善大使
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li id="icPlan" className="navToggleWrap">
							<span className="mainNavTtl">
								<br />
								旅の計画
							</span>
							<div className="mainNavInWrap_2">
								<ul className="mainNavIn2">
									<li>
										<a href="https://www.welcome.city.yokohama.jp/tic/">
											観光案内所
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/access/">
											横浜観光のアクセス・交通情報
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/bousai/">
											横浜市の防災対策
										</a>
									</li>
									<li>
										<a href="https://www.welcome.city.yokohama.jp/nosmoking/">
											横浜市の喫煙禁止地区の取組
										</a>
									</li>
								</ul>
							</div>
						</li>
						<li id="mainNavSearch">
							<span>
								<form
									action="https://search.yahoo.co.jp/search"
									method="get"
									target="_blank"
									rel="noreferrer"
								>
									<input type="text" name="p" placeholder="サイト内検索" />
									<input type="hidden" name="fr" value="ysiw" />
									<input type="hidden" name="ei" value="utf-8" />
									<button type="submit">
										<i className="fa fa-search" aria-hidden="true" />
									</button>
									<input
										name="vs"
										type="hidden"
										value="welcome.city.yokohama.jp"
										checked="checked"
									/>
								</form>
								<img
									src="//s.yimg.jp/images/search/guide/searchbox/080318/ysearch_logo_85_22.gif"
									width="1"
									height="1"
									style={{ display: "block", position: "absolute" }}
								/>
							</span>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default Header;
