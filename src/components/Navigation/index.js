import React from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMapMarkerAlt,
  faSuitcaseRolling,
  faExternalLink,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "../../assets/images/logo.svg";
import Img from "../../assets/images/nav-image.webp";
import ImgLg from "../../assets/images/nav-image.webp";
import Img2 from "../../assets/images/nav-image-2.webp";

import "./style.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="container-fluid">
          <Row>
            <Col className="navLeft" xs={9} sm={5} md={"auto"}>
              <div className="ms-0">
                <div className="leftTop">
                  <div className="position-sticky">
                    <img src={Logo} className="logo" alt="AKO MAG." />
                    <Row className="items g-0 mt-2 mt-md-3 ">
                      <Col className="itemLink">
                        <a target={'_blank'} href="https://ako-mag.jp/#sec-sightseeing" rel="noreferrer">いこう.</a>
                      </Col>
                      <Col className="itemLink gray">かおう.</Col>
                      <Col className="itemLink">
                        <a target={'_blank'} href="https://ako-mag.jp/#sec-live" rel="noreferrer">すもう.</a>
                      </Col>
                      <Col className="itemLink">
                        <a target={'_blank'} href="https://ako-mag.jp/letters/" rel="noreferrer">お便り.</a>
                      </Col>
                      <Col className="itemLink">
                        <a target={'_blank'} href="https://ako-mag.jp/about/" rel="noreferrer">わたしたち.</a>
                      </Col>
                    </Row>
                  </div>
                </div>
                <div className="mt-3 mt-lg-4 left-desc">
                  温泉やスイーツといったカルチャーと塩田や赤穂浪士といった伝統が溶け合った｢新しい赤穂｣が､今注目を浴びています｡
                </div>
                <div className="mt-3 mt-lg-4 left-desc">
                  この溢れる｢赤穂｣の魅力を､｢観光｣｢物産｣｢移住｣のカテゴリで発信｡あなたにとってイイ感じの赤穂､見つけてください♪
                </div>
                <div className="text-end mt-3 mt-md-5 left-desc">
                  赤穂マガジン.
                </div>
              </div>
            </Col>
            <Col xs={9} sm={5} md={"auto"} className="navRight">
              <Row className="align-items-end ">
                <Col sm={7} md>
                  <div className="textSkew">冬のイチオシ</div>
                  <div className="navImages">
                    <div className="topRight">
                      <h1 style={{ color: "black" }}>
                        <span>赤穂の冬は､</span> <br />
                        牡蠣小屋と温泉♨️
                      </h1>
                      <p className="mt-2">
                        瀬戸内海が育む牡蠣と <br />
                        絶景温泉を堪能
                      </p>
                    </div>
                    <picture className="image">
                      <source srcSet={ImgLg} media="(min-width: 897px)" />
                      <img
                        className="w-100 h-100 of-cover"
                        src={Img}
                        alt="牡蠣小屋と温泉"
                      />
                    </picture>
                  </div>
                </Col>
                <Col sm="auto" className="mt-3 mt-md-0 rightLinks">
                  <Row>
                    <Col xs={5} sm={12}>
                      <picture className="image2">
                        <img
                          className="of-cover"
                          src={Img2}
                          alt="牡蠣小屋と温泉"
                        />
                      </picture>
                    </Col>
                    <Col xs={7} sm={12} className="textDesc d-flex flex-column">
                      <div className="d-inline-block mt-2 mt-md-4">
                        ｢夕日眺めながらの牡蠣小屋｣
                      </div>
                      <div className="text-end d-inline-block mt-2 mt-md-4">
                        ｢牡蠣汁…ジュワあつあつ｣
                      </div>
                      <div className="d-inline-block mt-2 mt-md-4">
                        ｢贅沢な心地よ…｣
                      </div>
                      <div className="text-end d-inline-block mt-2 mt-md-4">
                        ｢うむ…良きかな赤穂｣
                      </div>
                    </Col>
                  </Row>
                  <hr className="dashed" />
                  <Row className="justify-content-between">
                    <Col xs={6} md={12}>
                      <a
                        href="https://goo.gl/maps/UbgosbgZ6UggFYiYA"
                        target="_blank"
                        rel="noreferrer"
                        className="linkStatic"
                      >
                        <div className="row align-items-center flex-nowrap">
                          <div className="linkIcon col-auto px-1">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </div>
                          <div className="linkRight col-auto px-1">
                            牡蠣小屋 りょうちゃん <br />
                            <small>
                              Google maps &nbsp;
                              <FontAwesomeIcon icon={faExternalLink} />
                            </small>
                          </div>
                        </div>
                      </a>
                    </Col>
                    <Col xs={6} md={12}>
                      <a
                        href="https://www.ako-mag.jp/hokaru/"
                        target="_blank"
                        rel="noreferrer"
                        className="linkStatic"
                      >
                        <div className="row mt-lg-3 align-items-center linkRight">
                          <div className="linkIcon col-auto px-1">
                            <FontAwesomeIcon icon={faSuitcaseRolling} />
                          </div>
                          <div className="linkRight col-auto px-1">
                            [観光]ほかる赤穂 <br />
                            <small>
                              Website &nbsp;
                              <FontAwesomeIcon icon={faExternalLink} />
                            </small>
                          </div>
                        </div>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Navigation;
