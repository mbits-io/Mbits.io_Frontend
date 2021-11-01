import React from "react";

export default function Blog() {
  return (
    <section className="blog_panel content-section" id="blog">
      <div className="container">
        <div className="blog_he">
          <h1>Mbits Blog</h1>
        </div>
        <div className="row ma_sec_r">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <div className="blog_lft_sec">
              <h1>Here you can read our futuristic blog.</h1>
              <p>
                Get inspired by articles from our team and guest writers, and
                see how we aim to contribute shaping the future of society with
                our technology.
              </p>
              <div className="raed_more">
                <a href="https://medium.com/mbits" target="_blank">
                  Click to read
                </a>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 st_p">
            <div className="row">
              <div className="col-sm-6 first_bl" style={{ marginTop: "10px" }}>
                <div className="blog_wrap_sec">
                  <a
                    href="https://medium.com/mbits/mbits-io-ecommerce-85d09a7554fd"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-images-1.medium.com/max/600/1*PA6Vz7UbFuYiaxQC0g0Epg.png"
                      className="img-responsive"
                      alt="Image"
                    />
                    <b>Mbits.io eCommerce</b>
                    <h1>
                      The MBITS platform will open the world of eCommerce to
                      millions of entrepre...
                    </h1>
                  </a>
                </div>
              </div>

              <div className="col-sm-6 second_blog" style={{ marginTop: "10px" }}>
                <div className="blog_wrap_sec">
                  <a
                    href="https://medium.com/mbits/mbits-io-and-the-4th-industrial-revolution-6dddb73e1e50"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-images-1.medium.com/max/600/1*VwiwuIb-i8_JQKUQRw0ALg.png"
                      className="img-responsive"
                      alt="Image"
                    />
                    <b>Mbits.io and The 4th Industria...</b>
                    <h1>
                      The 4th Industrial Revolution is likely to change
                      everything as we know it…
                    </h1>
                  </a>
                </div>
              </div>

              <div className="col-sm-6 third_blog" style={{ marginTop: "10px" }}>
                <div className="blog_wrap_sec">
                  <a
                    href="https://medium.com/mbits/taking-the-mbits-io-technology-to-space-28b889856626"
                    target="_blank"
                  >
                    <img
                      src="https://cdn-images-1.medium.com/max/600/0*baXtQIkTVSzUuV8x"
                      className="img-responsive"
                      alt="Image"
                    />
                    <b>Taking the Mbits.io technology...</b>
                    <h1>
                      Taking the mbits.io technology to space, making our
                      technology completely d...
                    </h1>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
