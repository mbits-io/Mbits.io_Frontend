import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Config from "../Config";
import Header from "./Header";
import Home from "./Home";
import Introduction from "./Introduction";
import ExploreVideo from "./ExploreVideo";

import PaperToken from "./PaperToken";
import Blog from "./Blog";
import RoadMap from "./RoadMap";
import RoadMap2 from "./RoadMap2";
import Technology from "./Technology";
import FlowChart from "./FlowChart";

import Team from "./Team";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

function HomePage(props) {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    axios.get(Config.API_URL + "pages?page_status=true").then((response) => {
      setPageData(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header pageData={pageData} mainProps={props} />

      <div
        className="i_p_sec hidden-lg hidden-xs"
        id="right_nav"
        // onClick="myFunction(this)"
      >
        <div className="bar_ipad1"></div>
        <div className="bar_ipad2"></div>
        <div className="bar_ipad3"></div>
      </div>

      <Sidebar pageData={pageData} />

      <div className="wrap_content">
        <Home />
        <Introduction />
        <ExploreVideo />
        <PaperToken />
        <Blog />
        <RoadMap />
        <RoadMap2 />
        <Technology />
        <FlowChart />
        <Team />

        <div className="model_wrap_f">
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 className="modal-title">Token Sale</h4>
                </div>
                <div className="modal-body">
                  <h5>Our Token sale will go live in the near future. </h5>
                  <ol>
                    <li>
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit,
                    </li>
                  </ol>

                  <p>
                    All announcements about our Token Sale will be done via
                    Medium{" "}
                    <a href="https://medium.com/mbits">
                      https://medium.com/mbits
                    </a>{" "}
                    and via our{" "}
                    <a
                      href="javascript:void(0);"
                      // onClick="showMailPopup();"
                      data-dismiss="modal"
                      className="mai_ls_j"
                    >
                      mailing list
                    </a>
                    .
                  </p>
                  <p>
                    Follow us on Medium and join our mailing list to be kept
                    updated on the latest news!
                  </p>
                  <p>
                    Meanwhile, you are welcome to donate to our project before
                    we go live with our token sale. To donate{" "}
                    <a
                      data-toggle="modal"
                      data-dismiss="modal"
                      data-target="#myModalDonation"
                      style={{ cursor: "pointer" }}
                    >
                      click here…
                    </a>
                  </p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <a href="#" className="btn btn-default">
                    Continue to Exchange
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="model_wrap_f">
          <div className="modal fade" id="myModalDonation" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 className="modal-title">Donate</h4>
                </div>
                <div className="modal-body">
                  <p>
                    You are welcome to donate to our cause before we go live
                    with our Token Sale/offering. We appreciate any help we can
                    get. Don't donate more than you can afford.
                  </p>
                  <p className="">
                    {" "}
                    Remember to follow us on{" "}
                    <a href="https://medium.com/mbits" target="_blank">
                      https://medium.com/mbits
                    </a>{" "}
                    and
                    <a
                      href="javascript:void(0);"
                      // onClick="showMailPopup();"
                      data-dismiss="modal"
                      className="mai_ls_j"
                    >
                      join our mailing list
                    </a>{" "}
                    All announcements will be done via these channels.{" "}
                  </p>
                  <div className="docv_bs">
                    <a
                      target="_blank"
                      href="https://commerce.coinbase.com/checkout/d6cd506a-20e6-409c-8c69-01e892665888"
                      target="_blank"
                    >
                      Donate with Crypto{" "}
                    </a>
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-3.2.1.min.js"
        ></script>
        <script src="https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js"></script>

        <Footer />
      </div>
      <div className="scroll-top-wrapper ">
        <span className="scroll-top-inner">
          <i className="fa fa-2x fa-arrow-circle-up"></i>
        </span>
      </div>
    </div>
  );
}

export default HomePage;
