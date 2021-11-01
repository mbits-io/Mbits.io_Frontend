import React from "react";


import team_img_1 from "../assets/img/team_img_1.png";
import team_img_4 from "../assets/img/team_img_4.png";
import team_img_5 from "../assets/img/team_img_5.png";
import team_img_7 from "../assets/img/team_img_7.png";
import team_img_3 from "../assets/img/team_img_3.png";

export default function Team() {
  return (
    <section className="team_panel content-section" id="team">
      <div className="container">
        <div className="blog_he">
          <h1>EXECUTIVE TEAM</h1>
        </div>
        <div className="row dfr_f">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 shadow_cl">
            <div className="tema_content_wrap">
              <div className="row sec_con_h">
                <div className="col-sm-3">
                  <div className="tema_m_img">
                    <img
                      src={team_img_1}
                      className="img-responsive"
                      alt="pic-team-1"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="to_r_n">
                    <h1>Kent-Inge Bardseng</h1>
                    <h5>CEO and Founder</h5>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="more_s">
                    <a href="#">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 shadow_cl">
            <div className="tema_content_wrap">
              <div className="row sec_con_h">
                <div className="col-sm-3">
                  <div className="tema_m_img">
                    <img
                      src={team_img_4}
                      className="img-responsive"
                      alt="pic-team-4"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="to_r_n">
                    <h1>ARILD HAUGENE</h1>
                    <h5>Chief Architect and Web Officer</h5>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="more_s">
                    <a href="#">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 shadow_cl">
            <div className="tema_content_wrap">
              <div className="row sec_con_h">
                <div className="col-sm-3">
                  <div className="tema_m_img">
                    <img
                      src={team_img_5}
                      className="img-responsive"
                      alt="pic-team-5"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="to_r_n">
                    <h1>HAAKON A. BERGBY</h1>
                    <h5>
                      Chief Technology Officer and head of The Mbits.io Gaming
                      Platform
                    </h5>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="more_s">
                    <a href="#">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 shadow_cl">
            <div className="tema_content_wrap">
              <div className="row sec_con_h">
                <div className="col-sm-3">
                  <div className="tema_m_img">
                    <img
                      src={team_img_3}
                      className="img-responsive"
                      alt="pic-team-3"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="to_r_n">
                    <h1>MARTINE STEEN</h1>
                    <h5>
                      Chief Business Development Officer and Head of Marketing
                    </h5>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="more_s">
                    <a href="#">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 shadow_cl">
            <div className="tema_content_wrap">
              <div className="row sec_con_h">
                <div className="col-sm-3">
                  <div className="tema_m_img">
                    <img
                      src={team_img_7}
                      className="img-responsive"
                      alt="pic-team-7"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="to_r_n">
                    <h1>REGHVENDRA CHAUDHARY</h1>
                    <h5>Web and UI Developer</h5>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="more_s">
                    <a href="#">More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
