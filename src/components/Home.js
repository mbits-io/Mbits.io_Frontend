import React from "react";

import JoinUsModel from "./JoinUsModel";
import logo from "../assets/img/logo.gif";
import logo2 from "../assets/img/logo2.gif";
import homeimg from "../assets/img/home-img.png";

export default function Home() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="content-section baner_top_sec" id="top">
      <div className="container">
        <div className="header_content">
          <div className="new_logo_sec hide_for_ipad desktop_logo">
            <img
              src={logo + "?v=1632826554"}
              className="img-responsive logo_one"
              alt="Image"
            />
            <img
              src={logo2 + "?v=1632826554"}
              className="img-responsive logo_two"
              alt="Image"
            />
          </div>
          <div className="new_logo_sec hide_for_desktop ipad_logo">
            <img
              src={logo + "?v=1632826554"}
              className="img-responsive logo_one ipad_logo_one"
              alt="Image"
            />
            <img
              src={logo2 + "?v=1632826554"}
              className="img-responsive logo_two ipad_logo_two"
              alt="Image"
            />
          </div>
          <div className="content_h_ba">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="baner_he_index">
                  <div className="mobile_logo">
                    <img
                      src={logo + "?v=1632826554"}
                      className="img-responsive logo_one"
                      alt="Image"
                    />
                    <img
                      src={logo2 + "?v=1632826554"}
                      className="img-responsive logo_two"
                      alt="Image"
                    />
                  </div>
                  <h1>
                    Mbits.io are building the digital world of tomorrow, today!{" "}
                  </h1>
                  <p>
                    Our goal is to achieve widespread adoption with our
                    technology in different industries. Connecting people and
                    businesses across borders. Empowering users and companies
                    with the right tools to succeed within the new technical
                    realm the coming years.
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div className="hea_im_r">
                  <img src={homeimg} className="img-responsive" alt="Image" />
                </div>
              </div>
            </div>

            <JoinUsModel
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            <div className="sub_sec_he"></div>
            <form method="post" id="subsform">
              <div className="newsletter ddfd">
                <div className="content">
                  <div className="input-group">
                    <input
                      type="hidden"
                      name="_token"
                      id="csrf-token"
                      value="2fj3vbUwFZ6OlyPmX5TPEeEp5dKz1yguYxBN4CM4"
                    />

                    <span className="input-group-btn">
                      <button
                        className="btn"
                        onClick={() => setModalShow(true)}
                        type="button"
                      >
                        Join our mailing List
                      </button>
                    </span>
                  </div>
                  <div
                    className="alert alert-success"
                    id="sucs"
                    style={{ display: "none" }}
                  >
                    <strong>Successfully</strong> Submitted
                    <a
                      href="#"
                      className="close"
                      data-dismiss="alert"
                      aria-label="close"
                    >
                      &times;
                    </a>
                  </div>
                  <div
                    className="alert alert-warning"
                    id="alre"
                    style={{ display: "none" }}
                  >
                    <strong>Email already</strong> Subscribed
                    <a
                      href="#"
                      className="close"
                      data-dismiss="alert"
                      aria-label="close"
                    >
                      &times;
                    </a>
                  </div>
                </div>
              </div>
            </form>
            <ul className="list-inline top_social">
              <li>
                <a target="_blank" href="https://www.facebook.com/mbits.io">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://mobile.twitter.com/mbits_io">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/mbits_io">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://t.me/mbits_io_qa">
                  <i className="fa fa-telegram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="https://medium.com/mbits">
                  <i className="fa fa-medium" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a target="_blank" href="#">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="new_wave_f">
        <div className="wrapper desktop_none_dis">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0
58-18 88-18s
58 18 88 18
58-18 88-18
58 18 88 18
v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use xlinkHref="#gentle-wave" x="44" y="0" fill="#ffffff99" />
              <use xlinkHref="#gentle-wave" x="44" y="3" fill="#ffffff99" />
              <use xlinkHref="#gentle-wave" x="44" y="5" fill="#ffffff99" />
              <use xlinkHref="#gentle-wave" x="44" y="7" fill="#fcfafc" />
            </g>
          </svg>
        </div>
        <div className="make_new_wave dis_none_ipad">
          <svg viewBox="0 0 120 28">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="2"
                  result="blur"
                ></feGaussianBlur>
                <feBlend in="SourceGraphic" in2="goo"></feBlend>
              </filter>
              <path
                id="wave"
                d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z"
              ></path>
            </defs>
            <use id="wave3" class="wave" xlinkHref="#wave" x="0" y="-2"></use>
            <use id="wave2" class="wave" xlinkHref="#wave" x="0" y="0"></use>
            <use id="wave1" class="wave" xlinkHref="#wave" x="0" y="1"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
