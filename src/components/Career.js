import React from "react";
import { Link } from "react-router-dom";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

import bloImg from "../assets/img/blo.png";
import logogif from "../assets/img/logo.gif";
import logo2gif from "../assets/img/logo2.gif";

export default function Career() {
  return (
    <div>
      <PageHeader />

      <div className="wrap_content">
        <div
          className="baner_inner_page"
          style={{
            backgroundImage: "url( " + bloImg + ")",
          }}
        >
          <div className="inner_baner_content">
            <div className="container">
              <div className="new_logo_sec hide_for_ipad desktop_logo">
                <img
                  src={logogif + "?v={{time()"}
                  className="img-responsive logo_one"
                  alt="Image"
                />
                <img
                  src={logo2gif + "?v={{time()"}
                  className="img-responsive logo_two"
                  alt="Image"
                />
              </div>

              <div className="new_logo_sec hide_for_desktop ipad_logo">
                <img
                  src={logogif + "?v={{time()"}
                  className="img-responsive logo_one ipad_logo_one"
                  alt="Image"
                />
                <img
                  src={logo2gif + "?v={{time()"}
                  className="img-responsive logo_two ipad_logo_two"
                  alt="Image"
                />
              </div>

              <div className="mobile_logo inner_page_mobile_logo">
                <img
                  src={logogif + "?v={{time()"}
                  className="img-responsive logo_one"
                  alt="Image"
                />
                <img
                  src={logo2gif + "?v={{time()"}
                  className="img-responsive logo_two"
                  alt="Image"
                />
              </div>
              <h1>Career</h1>
            </div>
          </div>
        </div>

        <section class="career_panel">
          <div class="container">
            <div class="filter_by">
              <h1>Filter by:</h1>

              <div class="row">
                <div class="col-sm-12">
                  <div class="filter_content">
                    <div class="form-group">
                      <select class="form-control">
                        <option>All countries</option>

                        <option>India</option>

                        <option>Japan</option>

                        <option>China</option>
                      </select>
                    </div>

                    <div class="filter_content">
                      <div class="form-group">
                        <select class="form-control">
                          <option>All Type Work</option>

                          <option>Full Time</option>

                          <option>Part Time</option>

                          <option>Part Time to Full Time</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="job_grid">
              <div class="row">
                <div class="col-sm-6">
                  <div class="wrap_job">
                    <Link to="/career-detail">
                      <h1>Front-End Web Developer</h1>

                      <ul class="list-inline l_job_map">
                        <li>
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Multiple Countries
                        </li>

                        <li>
                          <i class="fa fa-clock-o" aria-hidden="true"></i> Full
                          Time
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="wrap_job">
                    <Link to="/career-detail">
                      <h1>Front-End Web Developer</h1>

                      <ul class="list-inline l_job_map">
                        <li>
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Multiple Countries
                        </li>

                        <li>
                          <i class="fa fa-clock-o" aria-hidden="true"></i> Full
                          Time
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="wrap_job">
                    <Link to="/career-detail">
                      <h1>Front-End Web Developer</h1>

                      <ul class="list-inline l_job_map">
                        <li>
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Multiple Countries
                        </li>

                        <li>
                          <i class="fa fa-clock-o" aria-hidden="true"></i> Full
                          Time
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="wrap_job">
                    <Link to="/career-detail">
                      <h1>Front-End Web Developer</h1>

                      <ul class="list-inline l_job_map">
                        <li>
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Multiple Countries
                        </li>

                        <li>
                          <i class="fa fa-clock-o" aria-hidden="true"></i> Full
                          Time
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="wrap_job">
                    <Link to="/career-detail">
                      <h1>Front-End Web Developer</h1>

                      <ul class="list-inline l_job_map">
                        <li>
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Multiple Countries
                        </li>

                        <li>
                          <i class="fa fa-clock-o" aria-hidden="true"></i> Full
                          Time
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>

                <div class="col-sm-6">
                  <div class="wrap_job">
                    <Link to="/career-detail">
                      <h1>Front-End Web Developer</h1>

                      <ul class="list-inline l_job_map">
                        <li>
                          <i class="fa fa-map-marker" aria-hidden="true"></i>{" "}
                          Multiple Countries
                        </li>

                        <li>
                          <i class="fa fa-clock-o" aria-hidden="true"></i> Full
                          Time
                        </li>
                      </ul>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
      <div className="scroll-top-wrapper">
        <span className="scroll-top-inner">
          <i className="fa fa-2x fa-arrow-circle-up"></i>
        </span>
      </div>
    </div>
  );
}
