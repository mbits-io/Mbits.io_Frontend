import React from "react";
import { Link } from "react-router-dom";
import JoinUsModel from "./JoinUsModel";

export default function Footer() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <footer className="footer_panel">
      <div className="new_wave_down">
        <div className="footer_wave_imp_cl">
          <svg viewBox="0 0 120 28" class="dis_none_ipad">
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
        <div className="desktop_none_dis">
          <svg
            class="waves"
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
              <use xlinkHref="#gentle-wave" x="44" y="5" fill="#ffffffe8" />
              <use xlinkHref="#gentle-wave" x="44" y="7" fill="#ffffff99" />
            </g>
          </svg>
        </div>
      </div>

      <div className="container">
        <div className="footer_search_sec">
          <div className="row">
            <div className="col-sm-12">
              <div className="sub_sec_he">
                <form method="post" id="subsform1">
                  <div className="newsletter">
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
                            type="button"
                            onClick={() => setModalShow(true)}
                          >
                            Join our mailing List
                          </button>
                        </span>
                      </div>
                      <div
                        className="alert alert-success"
                        id="sucs1"
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
                        id="alre1"
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
              </div>
            </div>
          </div>
        </div>
        <div className="w_sde">
          <div className="row">
            <div className="col-lg-4 col-md-4 hidden-lg lse_d">
              <ul className="list-inline top_social mob_cg">
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

            <JoinUsModel
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

            <div className="col-lg-4 col-md-4">
              <div className="text_f_l_h">
                <p>
                  <i>Mbits.io</i>
                  <br />
                  Vestsivegen 67, 2411 <br />
                  Elverum, Norway
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 hidden-xs md_hi">
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
            <div className="col-lg-4 col-md-4">
              <ul className="list-unstyled f_imt">
                <li>
                  <Link to="/career">- Careers</Link>
                </li>
                <li>
                  <Link to="/disclaimer">- Disclaimer</Link>
                </li>
                <li>
                  <Link to="/privacy">- Privacy</Link>
                </li>
                <li>
                  <Link to="/faq">- FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
