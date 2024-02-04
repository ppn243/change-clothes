import React, { useState } from "react";
import data from "../Data/Data.json";
import { useSelector, useDispatch } from "react-redux";
import { changeClothes } from "../redux/changeClothesReducer";
export default function ChangeClothes() {
  const { navPills, tabPanes } = data;
  // console.log("tabPanes", tabPanes);
  const { clothes } = useSelector((state) => state.changeClothesReducer);
  // console.log(clothes);
  const dispatch = useDispatch();
  const handleTryClothes = (item) => {
    dispatch(changeClothes(item));
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="text-center">
              <img src="./../assets/images/cybersoft.png" alt="Card logo" />
            </div>
            <div className="card-body">
              <h4 className="card-title text-center">
                CyberLearn - Học lập trình trực tuyến - Dự án thử đồ trực tuyến
                - Virtual Dressing Room
              </h4>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <ul className="nav nav-pills">
            {navPills.map((item, index) => {
              return (
                <li className="nav-item" key={index}>
                  <a
                    className="nav-link  btn-default"
                    data-toggle="pill"
                    href={"#" + item.tabName}
                  >
                    {item.showName}
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="well">
            {/* Tab panes */}
            <div className="tab-content">
              <div className="tab-pane container active" id="tabTopClothes">
                <div className="container">
                  <div className="row">
                    {tabPanes
                      .filter((type) => type.type === "topclothes")
                      .map((item, index) => {
                        return (
                          <div className="col-md-3" key={index}>
                            <div className="card text-center">
                              <img
                                src={item.imgSrc_jpg}
                                alt={item.imgSrc_jpg}
                              />
                              <h4>
                                <b>{item.name}</b>
                              </h4>
                              <button onClick={() => handleTryClothes(item)}>
                                Thử đồ
                              </button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="tabBotClothes">
                <div className="container">
                  <div className="row">
                    {tabPanes
                      .filter((type) => type.type === "botclothes")
                      .map((item, index) => {
                        return (
                          <div className="col-md-3" key={index}>
                            <div className="card text-center">
                              <img
                                src={item.imgSrc_jpg}
                                alt={item.imgSrc_jpg}
                              />
                              <h4>
                                <b>{item.name}</b>
                              </h4>
                              <button>Thử đồ</button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="tabShoes">
                <div className="container">
                  <div className="row">
                    {tabPanes
                      .filter((type) => type.type === "shoes")
                      .map((item, index) => {
                        return (
                          <div className="col-md-3" key={index}>
                            <div className="card text-center">
                              <img
                                src={item.imgSrc_jpg}
                                alt={item.imgSrc_jpg}
                              />
                              <h4>
                                <b>{item.name}</b>
                              </h4>
                              <button>Thử đồ</button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="tabHandBags">
                <div className="container">
                  <div className="row">
                    {tabPanes
                      .filter((type) => type.type === "handbags")
                      .map((item, index) => {
                        return (
                          <div className="col-md-3" key={index}>
                            <div className="card text-center">
                              <img
                                src={item.imgSrc_jpg}
                                alt={item.imgSrc_jpg}
                              />
                              <h4>
                                <b>{item.name}</b>
                              </h4>
                              <button>Thử đồ</button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="tabNecklaces">
                <div className="container">
                  <div className="row">
                    {tabPanes
                      .filter((type) => type.type === "necklaces")
                      .map((item, index) => {
                        return (
                          <div className="col-md-3" key={index}>
                            <div className="card text-center">
                              <img
                                src={item.imgSrc_jpg}
                                alt={item.imgSrc_jpg}
                              />
                              <h4>
                                <b>{item.name}</b>
                              </h4>
                              <button>Thử đồ</button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="tabHairStyle">
                <div className="container">
                  <div className="row">
                    {tabPanes
                      .filter((type) => type.type === "hairstyle")
                      .map((item, index) => {
                        return (
                          <div className="col-md-3" key={index}>
                            <div className="card text-center">
                              <img
                                src={item.imgSrc_jpg}
                                alt={item.imgSrc_jpg}
                              />
                              <h4>
                                <b>{item.name}</b>
                              </h4>
                              <button>Thử đồ</button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="tab-pane container fade" id="tabBackground">
                <div className="container">
                  <div className="row">
                    {tabPanes
                      .filter((type) => type.type === "background")
                      .map((item, index) => {
                        return (
                          <div className="col-md-3" key={index}>
                            <div className="card text-center">
                              <img
                                src={item.imgSrc_jpg}
                                alt={item.imgSrc_jpg}
                              />
                              <h4>
                                <b>{item.name}</b>
                              </h4>
                              <button>Thử đồ</button>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="contain">
            <div className="body" />
            <div className="model" />
            {clothes
              .filter((hair) => hair.type === "hairstyle")
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="hairstyle"
                    style={{
                      width: 1000,
                      height: 1000,
                      background: `url(${item.imgSrc_png})`,
                      position: "absolute",
                      top: "-75%",
                      right: "-57%",
                      transform: "scale(0.15)",
                      zIndex: 4,
                    }}
                  />
                );
              })}
            {clothes
              .filter((necklaces) => necklaces.type === "necklaces")
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="necklace"
                    style={{
                      width: 500,
                      height: 1000,
                      background: `url(${item.imgSrc_png})`,
                      position: "absolute",
                      bottom: "-40%",
                      right: "-3.5%",
                      transform: "scale(0.5)",
                      zIndex: 4,
                    }}
                  />
                );
              })}
            {clothes
              .filter((topclothes) => topclothes.type === "topclothes")
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bikinitop"
                    style={{
                      width: 500,
                      height: 500,
                      background: `url(${item.imgSrc_png})`,
                      position: "absolute",
                      top: "-9%",
                      left: "-5%",
                      zIndex: 3,
                      transform: "scale(0.5)",
                    }}
                  />
                );
              })}
            {clothes
              .filter((botclothes) => botclothes.type === "botclothes")
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bikinibottom"
                    style={{
                      width: 500,
                      height: 1000,
                      background: `url(${item.imgSrc_png})`,
                      position: "absolute",
                      top: "-30%",
                      left: "-5%",
                      zIndex: 2,
                      transform: "scale(0.5)",
                    }}
                  />
                );
              })}
            {clothes
              .filter((handbags) => handbags.type === "handbags")
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="handbag"
                    style={{
                      width: 500,
                      height: 1000,
                      background: `url(${item.imgSrc_png})`,
                      position: "absolute",
                      bottom: "-40%",
                      right: "-3.5%",
                      transform: "scale(0.5)",
                      zIndex: 4,
                    }}
                  />
                );
              })}
            {clothes
              .filter((shoes) => shoes.type === "shoes")
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="feet"
                    style={{
                      width: 500,
                      height: 1000,
                      background: `url(${item.imgSrc_png})`,
                      position: "absolute",
                      bottom: "-37%",
                      right: "-3.5%",
                      transform: "scale(0.5)",
                      zIndex: 1,
                    }}
                  />
                );
              })}
            {clothes
              .filter((background) => background.type === "background")
              .map((item, index) => {
                return (
                  <div
                    key={index}
                    className="background"
                    style={{
                      backgroundImage: `url(${item.imgSrc_png})`,
                    }}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
