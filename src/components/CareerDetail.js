import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

import bloImg from "../assets/img/blo.png";
import logogif from "../assets/img/logo.gif";
import logo2gif from "../assets/img/logo2.gif";

export default function CareerDetail() {
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
              <h1>Career Detail</h1>
            </div>
          </div>
        </div>

        <section class="carrer_inner_page">
          <div class="container">
            <div class="conten_job_deatils">
              <h1>Company Overview</h1>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>

              <h1>Job Overview</h1>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>

              <h1>Responsibilities and Duties</h1>

              <ul class="na_ds">
                <li>Respond to customer questions</li>

                <li>Resolve customer issues</li>

                <li>
                  Positively and respectfully communicate with customers&nbsp;
                </li>

                <li>Maintain consistent, reliable attendance standards</li>

                <li>Maintain company and client confidentiality</li>

                <li>
                  Communicate well virtually with the rest of the team and other
                  agents
                </li>
              </ul>

              <h1>Qualifications & Requirements</h1>

              <ul class="na_ds">
                <li>High School Diploma or higher</li>

                <li>High level in speaking &amp; writing in English</li>

                <li>Proficient in Microsoft Suite &amp; Google</li>

                <li>Basic knowledge of business procedures and strategies</li>

                <li>
                  Familiarity with current technologies, like desktop sharing,
                  cloud services and VoIP
                </li>

                <li>Exceptional customer service skills</li>

                <li>Excellent organization skills</li>

                <li>Superb communication skills</li>

                <li>Respect for intellectual property</li>

                <li>High-speed internet with a minimum of 20Mbps</li>

                <li>Must have an updated working computer</li>

                <li>Must be willing to learn and improve in all skill areas</li>
              </ul>
            </div>

            <div class="appliy_form">
              <h1>Apply for this position</h1>

              <form>
                <div class="row">
                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id=""
                        type="text"
                        class="form-control"
                        placeholder="First Name"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id=""
                        type="text"
                        class="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id=""
                        type="text"
                        class="form-control"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id=""
                        type="text"
                        class="form-control"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id=""
                        type="text"
                        class="form-control"
                        placeholder="Address"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id=""
                        type="text"
                        class="form-control"
                        placeholder="City"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id=""
                        type="text"
                        class="form-control"
                        placeholder="State"
                      />
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <div class="form-group">
                      <input
                        id=""
                        type="text"
                        class="form-control"
                        placeholder="Pin"
                      />
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="form-group">
                      <input
                        id=""
                        type="file"
                        class="form-control"
                        placeholder="Pin"
                      />
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="form-group">
                      <textarea
                        id="form_message"
                        name="message"
                        class="form-control"
                        placeholder="Message for me *"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="form-check">
                      <label class="form-check-label">
                        <span>
                          I consent Mbits.io to retain my personal information
                          on their database, and use it for their recruitment
                          process.
                        </span>
                      </label>
                    </div>
                  </div>

                  <div class="col-sm-12">
                    <div class="form-group btn_h_l">
                      <button type="button" class="btn btn-secondary">
                        Submit application
                      </button>
                    </div>
                  </div>
                </div>
              </form>
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
