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

const MobileFooter = () => {
	return (
		<>
			<p id="to_top2">
				<a href="#">
					PAGE TOP <i className="fas fa-arrow-right"></i>
				</a>
			</p>
			<div className="caution">
				<ul>
					<li>
						※当サイトの内容、テキスト、画像等の無断転載・無断使用を固く禁じます。また、まとめサイトへの引用を一切禁じます。すべての著作権は横浜市観光公式サイト「横浜観光情報」に帰属します。
					</li>
				</ul>
			</div>
			<div id="footer" className="newLayout">
				<div
					id="simpleSidebar"
					data-simplesidebar="disabled"
					style={{
						display: "block",
						position: "fixed",
						top: "0px",
						bottom: "0px",
						width: "260px",
						zIndex: "3000",
						left: "-260px",
					}}
				>
					<div
						data-simplesidebar="sbwrapper"
						style={{
							position: "relative",
							height: "100%",
							overflow: "hidden auto",
						}}
					>
						<nav id="footerNav" role="navigation">
							<p className="ifsp footLogo">
								<a href="https://www.welcome.city.yokohama.jp/">
									<img
										alt="【公式】横浜市観光情報サイト - Yokohama Official Visitors' Guide"
										src="https://www.welcome.city.yokohama.jp/common/img/logo.png"
										width="130"
									/>
								</a>
							</p>
							<div className="wd100px fll">
								<p className="fot_ttl ifsp">
									<a href="https://www.welcome.city.yokohama.jp/">ホーム</a>
								</p>
								<p className="fot_ttl fot_ttl_toggle">最新情報</p>
								<ul style={{ display: "none" }}>
									{/* <!-- <li className="ifsp"><a href="https://www.welcome.city.yokohama.jp/">ホーム</a></li> --> */}
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
									<p>◆SNS</p>
									<li>
										<a
											href="https://www.facebook.com/welcome.city.yokohama"
											target="_blank"
											rel="noreferrer"
										>
											Facebook
										</a>
									</li>
									<li>
										<a
											href="https://twitter.com/hamako_yokohama"
											target="_blank"
											rel="noreferrer"
										>
											Twitter
										</a>
									</li>
									<li>
										<a
											href="https://www.instagram.com/yokohama_visitors_guide/"
											target="_blank"
											rel="noreferrer"
										>
											Instagram
										</a>
									</li>
									<li>
										<a
											href="https://www.youtube.com/channel/UCmrPc0dX9qA0MN8Es-zDiPg"
											target="_blank"
											rel="noreferrer"
										>
											Youtube
										</a>
									</li>
								</ul>
							</div>

							<div className="ftClmR">
								<div className="ftSection">
									<p className="fot_ttl">
										<a href="https://www.welcome.city.yokohama.jp/eventinfo/">
											イベント
										</a>
									</p>
									<ul>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/eventinfo/">
												イベントカレンダー
											</a>
										</li>
									</ul>

									<p className="fot_ttl fot_ttl_toggle mt30">スポット</p>
									<ul style={{ display: "none" }}>
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
												My Plan（マイプラン）
											</a>
										</li>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/chinatown/">
												横浜中華街へ行こう
											</a>
										</li>
									</ul>
								</div>

								<div className="ftSection">
									<p className="fot_ttl fot_ttl_toggle">旅の予約</p>
									<ul style={{ display: "none" }}>
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

								<div className="ftSection">
									<p className="fot_ttl fot_ttl_toggle">見る＆遊ぶ</p>
									<ul style={{ display: "none" }}>
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
											<a href="https://www.welcome.city.yokohama.jp/beer/">
												「ビールの街」横浜 <br className="ifsp" />
												クラフトビール特集
											</a>
										</li>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/prperson/">
												横浜観光応援団
											</a>
										</li>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/virtual/">
												バーチャル横浜
											</a>
										</li>
									</ul>
								</div>

								<div className="ftSection mt30 both">
									<p className="fot_ttl fot_ttl_toggle">旅の計画</p>
									<ul style={{ display: "none" }}>
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

								<div className="ftSection mt30 mb40">
									<p className="fot_ttl fot_ttl_toggle">サイトについて</p>
									<ul style={{ display: "none" }}>
										<li>
											<a
												href="javascript:void(0);"
												className="talkappi-faq-icon"
											>
												よくあるご質問
											</a>
										</li>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/banner.php">
												広告掲載について
											</a>
										</li>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/faciliti/">
												ウェブアクセシビリティ【FACIL’iti】
											</a>
										</li>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/accessibility/">
												バリアフリー情報
											</a>
										</li>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/policy.php">
												サイトポリシー、プライバシーポリシー
											</a>
										</li>
										<li>
											<a href="https://www.welcome.city.yokohama.jp/faq.php">
												運営会社・お問い合わせ
											</a>
										</li>
									</ul>
								</div>

								<div id="smallNav">
									<ul className="iconS">
										<li>
											<a
												href="https://www.facebook.com/welcome.city.yokohama"
												target="_blank"
												rel="noreferrer"
											>
												<i
													className="fab fa-facebook-square"
													aria-hidden="true"
												></i>
											</a>
										</li>
										<li>
											<a
												href="https://twitter.com/hamako_yokohama"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fab fa-twitter" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a
												href="https://www.instagram.com/yokohama_visitors_guide/"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fab fa-instagram" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a
												href="https://www.youtube.com/channel/UCmrPc0dX9qA0MN8Es-zDiPg"
												target="_blank"
												rel="noreferrer"
											>
												<i className="fab fa-youtube" aria-hidden="true"></i>
											</a>
										</li>
									</ul>
									<p className="icAccessibility">
										<a href="/accessibility/">
											<i className="fa fa-wheelchair" aria-hidden="true"></i>
											<br className="ifpc" />
											バリアフリー情報
										</a>
									</p>
									<p className="icAccessibility">
										<a href="/faciliti/">
											<i className="far fa-eye" aria-hidden="true"></i>
											<br className="ifpc" />
											アクセシビリティ
										</a>
									</p>

									<div className="langSelect">
										<p className="langOpen btnToggle">
											<i className="fa fa-globe" aria-hidden="true"></i>
											<br className="ifpc" />
											Language
										</p>
										<div
											id="divLang"
											className="clmToggle"
											style={{ display: "none" }}
										>
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
												<p>
													<a href="https://www.yokohamajapan.com/es/">
														<span lang="es">Español</span>
													</a>
												</p>
												<p>
													<a href="https://www.yokohamajapan.com/th/">
														<span lang="th">ไทย</span>
													</a>
												</p>
												<p>
													<a href="https://www.yokohamajapan.com/id/">
														<span lang="id">Bahasa Indonesia</span>
													</a>
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="ftSection otherMenu mt30">
									<p className="fot_ttl">
										<a
											href="https://business.yokohamajapan.com/mice/ja/"
											target="_blank"
											rel="noreferrer"
										>
											コンベンション情報
										</a>
									</p>
									<p className="fot_ttl">
										<a
											href="https://business.yokohamajapan.com/media/ja/"
											target="_blank"
											rel="noreferrer"
										>
											メディア・観光事業者
										</a>
									</p>
									<p className="fot_ttl">
										<a
											href="https://business.yokohamajapan.com/education/"
											target="_blank"
											rel="noreferrer"
										>
											教育旅行
										</a>
									</p>
									<p className="fot_ttl">
										<a
											href="https://www.welcome.city.yokohama.jp/cruise/"
											target="_blank"
											rel="noreferrer"
										>
											クルーズ
										</a>
									</p>
									<p className="fot_ttl">
										<a
											href="https://www.welcome.city.yokohama.jp/wedding/"
											target="_blank"
											rel="noreferrer"
										>
											ウェディング
										</a>
									</p>
									<p className="fot_ttl">
										<a
											href="https://business.yokohamajapan.com/member/"
											target="_blank"
											rel="noreferrer"
										>
											賛助会員
										</a>
									</p>
									<p className="fot_ttl">
										<a
											href="https://business.yokohamajapan.com/ja/"
											target="_blank"
											rel="noreferrer"
										>
											財団について
										</a>
									</p>
									<p className="fot_ttl">
										<a
											href="https://www.welcome.city.yokohama.jp/5city/"
											target="_blank"
											rel="noreferrer"
										>
											日本開港５都市協議会
										</a>
									</p>
								</div>
							</div>
						</nav>

						<p id="sideClose">
							<b>閉じる</b>
						</p>
					</div>
				</div>

				<div className="bgB ifpc">
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
						<li>
							<a
								href="https://www.welcome.city.yokohama.jp/5city/"
								target="_blank"
								rel="noreferrer"
							>
								<small>日本開港５都市協議会</small>
							</a>
						</li>
					</ul>
				</div>

				<div className="about">
					<p className="fot_ttl_1">サイトについて</p>
					<ul>
						<li>
							<a href="javascript:void(0);" className="talkappi-faq-icon">
								よくあるご質問
							</a>
						</li>
						<li>
							<a href="https://www.welcome.city.yokohama.jp/banner.php">
								広告掲載について
							</a>
						</li>
						<li>
							<a href="https://www.welcome.city.yokohama.jp/faciliti/">
								ウェブアクセシビリティ【FACIL’iti】
							</a>
						</li>
						<li>
							<a href="https://www.welcome.city.yokohama.jp/accessibility/">
								バリアフリー情報
							</a>
						</li>
						<li>
							<a href="https://www.welcome.city.yokohama.jp/policy.php">
								サイトポリシー、プライバシーポリシー
							</a>
						</li>
						<li>
							<a href="https://www.welcome.city.yokohama.jp/faq.php">
								運営会社・お問い合わせ
							</a>
						</li>
					</ul>
				</div>
				<div className="inquiry">
					<p className="fot_ttl_1">観光に関するお問い合わせ</p>
					<p span="" className="bold mb10">
						公益財団法人
						<br />
						横浜観光コンベンション・ビューロー
					</p>
					<p className="mb20">
						所在地：
						<br />
						〒231-0023 神奈川県横浜市中区山下町2
						<br />
						産業貿易センター1F
						<br />
						TEL：045-221-2111（代）
						<br />
						FAX：045-221-2100
					</p>
					<ul>
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
								href="https://business.yokohamajapan.com/ja/"
								target="_blank"
								rel="noreferrer"
							>
								財団について
							</a>
						</li>
					</ul>
				</div>
				<div className="sns_ico2">
					<a
						href="https://www.facebook.com/welcome.city.yokohama"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-facebook-square"></i>
					</a>
					<a
						href="https://twitter.com/hamako_yokohama"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-twitter"></i>
					</a>
					<a
						href="https://www.instagram.com/yokohama_visitors_guide/"
						target="_blank"
						rel="noreferrer"
					>
						<i className="fab fa-instagram"></i>
					</a>
					<a href="https://www.youtube.com/channel/UCmrPc0dX9qA0MN8Es-zDiPg">
						<i className="fab fa-youtube"></i>
					</a>
				</div>

				<p id="copyright">
					<a
						href="https://business.yokohamajapan.com/ja/"
						target="_blank"
						rel="noreferrer"
					>
						<img
							alt="【公式】横浜市観光情報サイト - Yokohama Official Visitors' Guide"
							src="/common/img/footer_logo.png"
							width="275"
							height="45"
						/>
					</a>
					<br />
					<span>
						Copyright © Yokohama Convention &amp; Visitors Bureau. All rights
						reserved.
					</span>
				</p>
			</div>
		</>
	);
};

export default MobileFooter;
