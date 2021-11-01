import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

import PageHeader from "./PageHeader";
import Footer from "./Footer";
import Config from "../Config";

import bloImg from "../assets/img/blo.png";
import logogif from "../assets/img/logo.gif";
import logo2gif from "../assets/img/logo2.gif";

const DynamicPage = (props) => {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    axios
      .get(Config.API_URL + "pages?page_status=true&route=" + props.match.params.route)
      .then((response) => {
        setPageData(response.data[0]);
      });
  }, [props.match.params.route]);

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
              <h1>{pageData?.title}</h1>
            </div>
          </div>
        </div>

        <section className="shs_w">
          <div class="container">
            <div class="content_term_p" style={{ marginTop: "48px" }}>
              <div> {ReactHtmlParser(pageData?.content)}</div>
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
};

export default DynamicPage;
