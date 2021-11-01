import React from "react";

import pdfDocImg from "../assets/img/pdf-document.png";
import donationImg from "../assets/img/donation.png";
import coinsImg from "../assets/img/coins.png";

export default function PaperToken() {
  return (
    <section className="featch_tocken content-section" id="tocken">
      <div className="container">
        <div className="te_h">
          <h2>PAPER, TOKEN & DONATION</h2>
        </div>
        <div className="bg_white content_wrap_paper">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="tech_paper_heading">
                <h1>Pitch deck technical paper - and Token sale </h1>
              </div>
            </div>

            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="tech_paper_button">
                <a
                  data-toggle="modal"
                  data-target=""
                  href="https://netorg5422602-my.sharepoint.com/:b:/g/personal/service_mbits_io/ETfpNHN-tbVFnTz4wXkXjd4B6fhCLDsxW0Wx_rbSAyrWcA?e=wrqsiP"
                >
                  Technical paper{" "}
                  <span>
                    <img
                      src={pdfDocImg}
                      className="img-responsive"
                      alt="Image"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="tech_paper_button">
                <a data-toggle="modal" data-target="#myModal">
                  Token Sale{" "}
                  <span>
                    <img
                      src={coinsImg}
                      className="img-responsive"
                      alt="Image"
                    />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div className="tech_paper_button">
                <a data-toggle="modal" data-target="#myModalDonation">
                  Donate{" "}
                  <span>
                    <img
                      src={donationImg}
                      className="img-responsive"
                      alt="Image"
                    />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
