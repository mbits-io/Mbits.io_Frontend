import React from "react";
import youtubeImg from "../assets/img/youtube_img.png";
import playBtnImg from "../assets/img/play-btn.png";

export default function ExploreVideo() {
  return (
    <section className="about_sec_here content-section" id="video">
      <div className="container">
        <h1>Explainer videos</h1>

        <main className="wow fadeInUp" data-wow-duration="1200ms">
          <div className="row video_ipad_cus_cl">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="card expl-video">
                <a
                  data-fancybox
                  data-width="850"
                  data-height="480"
                  href="https://www.youtube.com/watch?time_continue=5&v=bOkhRYuCnxs"
                >
                  <img
                    src={playBtnImg}
                    className="img-responsive play_b"
                    alt="Image"
                  />
                  <img className="card-img-top img-fluid" src={youtubeImg} />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
