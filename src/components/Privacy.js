import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

import bloImg from "../assets/img/blo.png";
import logogif from "../assets/img/logo.gif";
import logo2gif from "../assets/img/logo2.gif";

export default function Privacy() {
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
              <h1>Privacy</h1>
            </div>
          </div>
        </div>

        <section className="shs_w">
          <div class="container">
            <div class="content_term_p">
              <h1></h1>
              <p>
                Mbits.io (the “Company,” “we,” or “us”) wants you to be familiar
                with how we collect, use and disclose information.
              </p>
              <b>
                This Privacy Policy describes our practices in connection with
                information that we collect:
              </b>{" "}
              &nbsp;
              <p>
                Through websites operated by us from which you are accessing
                this Privacy Policy (the “Websites”); and through HTML-formatted
                email messages that we send to you that link to this Privacy
                Policy.
              </p>
              <p>Collectively, we refer to the above as the “Services”.</p>
              <b>PERSONAL INFORMATION</b>
              <p>
                “Personal Information” is information that identifies you as an
                individual or relates to an identifiable individual, such as:
              </p>{" "}
              &nbsp;
              <b>Name:</b>
              <b>Telephone number:</b>
              <b>Email address:</b>
              <b>Collection of Personal Information:</b>&nbsp;
              <b>
                We and our service providers collect Personal Information in a
                variety of ways, including:
              </b>
              &nbsp;
              <p>
                when you sign up for a newsletter, subscribe to our blog,
                register an account to access the Services, contact us via the
                Services regarding possible partnerships or job opportunities.
              </p>
              <p>
                We need to collect Personal Information in order to provide the
                requested Services to you.
              </p>
              &nbsp;
              <p>
                If you do not provide the information requested, we may not be
                able to provide the Services.
              </p>
              &nbsp;
              <p>Use of Personal Information</p>&nbsp;
              <p>
                We and our service providers use Personal Information for
                legitimate business purposes including:
              </p>
              &nbsp;
              <p>
                Providing the functionality of the Services and fulfilling your
                requests.
              </p>
              <p>
                To respond to your inquiries and fulfill your requests, when you
                contact us via one of our online contact forms or otherwise, for
                example, when you send us questions, suggestions, compliments or
                complaints, or when you request other information about our
                Services or to enquire about partnering or working with us.
              </p>
              <p>
                To send administrative information to you, such as changes to
                our terms, conditions and policies.
              </p>
              <p>To provide you with related customer service.</p>
              <p>
                We will engage in these activities to manage our contractual
                relationship with you and/or to comply with a legal obligation.
              </p>
              &nbsp;
              <p>
                To send you marketing related emails, with information about our
                services, new products and other news about our company.
              </p>
              <p>
                We will engage in this activity with your consent or where we
                have a legitimate interest.
              </p>
              &nbsp;
              <p>
                We use Cookies and other related technologies on our websites.
                We refer to our privacy policy powered by Quantcast for more
                information. To Edit your Privacy Settings, click on the blue
                ribbon down in the bottom right corner.{" "}
              </p>
              &nbsp;
              <p>Last updated August 2019</p>
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
