import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

import bloImg from "../assets/img/blo.png";
import logogif from "../assets/img/logo.gif";
import logo2gif from "../assets/img/logo2.gif";

import ai from "../assets/img/ai.png";
import mbits6 from "../assets/img/mbits6.jpg";
import zero_s from "../assets/img/zero_s.png";

export default function ZeroKnowledge() {
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
                  alt="Imageno"
                />
                <img
                  src={logo2gif + "?v={{time()"}
                  className="img-responsive logo_two"
                  alt="Imageno"
                />
              </div>

              <div className="new_logo_sec hide_for_desktop ipad_logo">
                <img
                  src={logogif + "?v={{time()"}
                  className="img-responsive logo_one ipad_logo_one"
                  alt="Imageno"
                />
                <img
                  src={logo2gif + "?v={{time()"}
                  className="img-responsive logo_two ipad_logo_two"
                  alt="Imageno"
                />
              </div>

              <div className="mobile_logo inner_page_mobile_logo">
                <img
                  src={logogif + "?v={{time()"}
                  className="img-responsive logo_one"
                  alt="Imageno"
                />
                <img
                  src={logo2gif + "?v={{time()"}
                  className="img-responsive logo_two"
                  alt="Imageno"
                />
              </div>
              <h1>Zero Knowledge Proof</h1>
            </div>
          </div>
        </div>

        <section class="zero_fist_panel">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="zero_first_con">
                  <h1> Zero Knowledge Mbits</h1>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 hidden-lg">
                    <div class="zero_first_right dds">
                      <img src={mbits6} class="img-responsive" alt="Imageno" />
                    </div>
                  </div>

                  <p>
                    Mbits.io is exploring and doing research into the field of
                    Zero Knowledge Proof and Secure Multiparty Computation and
                    how this can be utilized in our systems
                  </p>

                  <p>
                    Zero Knowledge Proof makes it possible for unknown people or
                    entities to collaborate with each other in an safe way. This
                    making our system robust and trustworthy, and everyone
                    taking part in using our systems will benefit from this.
                  </p>

                  <p>
                    Mbits.io´s approach to Zero Knowledge Proof lets the
                    user/costumer/warehouse/brand or company, and the other
                    party or entity deal with each other without knowing or
                    trusting each other. We give the different users the power
                    to proof that they know the secret (or many secrets) without
                    having to reveal information that they don't like to or need
                    to reveal.
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 hidden-xs hidden-md-s">
                <div class="zero_first_right">
                  <img src={mbits6} class="img-responsive" alt="Imageno" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="zero_fist_panel bg_white">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 hidden-xs hidden-md-s">
                <div class="ste_img_zero">
                  <img src={zero_s} class="img-responsive" alt="Imageno" />
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="step_zero">
                  <h1>Trusting the unknown, and collaborating. </h1>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 hidden-lg dds">
                    <div class="ste_img_zero">
                      <img src={zero_s} class="img-responsive" alt="Imageno" />
                    </div>
                  </div>

                  <p>
                    Zero knowledge meaning that nothing or “zero” information
                    about the secret is revealed to the other party, but still
                    letting you proof that you know that secret never-less.
                  </p>

                  <p>
                    This is a great way for two unknown parties to collaborate
                    without needing to trust eachother.
                  </p>

                  <p>
                    Our Mbits Zero Knowledge Proof technology can also be used
                    to incentivize the parties to share their data in a trustful
                    manner, knowing that their sensitive data will not be open
                    for other parties, but still can be used anonymized. This
                    can apply to all types of data like; bank-records, different
                    history on the platform, browser history, medical records,
                    DNA, genes and so on... All of this is handled with
                    algorithms overseen by our Artificial intelligence. All of
                    this data is handled decentralized without intermediaries,
                    letting the user or entity retain ownership of their digital
                    assets. Even we don't know the information of our users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="zero_fist_panel">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                <div class="step_zero">
                  <h1>Distributing wealth by entrepreneurship</h1>

                  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 hidden-lg dds">
                    <div class="ste_img_zero">
                      <img src={ai} class="img-responsive" alt="Imageno" />
                    </div>
                  </div>

                  <p>
                    Since we have a built in ad-platform this data can be used
                    there to benefit everyone using this.{" "}
                  </p>

                  <p>
                    The user get reworded with Mbits for sharing their data, and
                    this can be traded on different exchanges.
                  </p>

                  <p>
                    But the data can be used for much more then merely ads. Even
                    though our ad-platform is open end democratized and can be
                    used by everyone on our platform that wants to drive their
                    business forward.
                  </p>

                  <p>
                    Another use-case we are looking into is how our Artificial
                    Intelligence, Blockchain Technology, Machine Learning, and
                    Deep Learning- algorithms can distribute wealth, as this is
                    a big part of our concept, giving people the opportunity to
                    be self-made and provide for themselves as well for their
                    families. We believe financial prosperity via
                    entrepreneurship will bring the world forward, and the
                    mbits.io technology can be a catalyst making this a
                    reality...
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 hidden-xs hidden-md-s">
                <div class="ste_img_zero">
                  <img src={ai} class="img-responsive" alt="Imageno" />
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
