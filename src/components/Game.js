import React from "react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";

import gameImg from "../assets/img/game.jpg";
import logogif from "../assets/img/logo.gif";
import logo2gif from "../assets/img/logo2.gif";

import ga_1 from "../assets/img/ga_1.jpg";
import head_p from "../assets/img/head_p.jpg";
import media133 from "../assets/img/media133.png";
import global_ma from "../assets/img/global_ma.png";
import two_g from "../assets/img/two_g.png";
import casino from "../assets/img/casino.jpg";
import rgam from "../assets/img/rgam.png";
import ga_i_m from "../assets/img/ga_i_m.jpg";

export default function Game(props) {
  return (
    <div>
      <PageHeader mainProps={props} />

      <div className="wrap_content">
        <div
          className="baner_inner_page"
          style={{
            backgroundImage: "url( " + gameImg + ")",
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
              <h1>Gaming Platform</h1>
            </div>
          </div>
        </div>

        <section className="game_panel_do bg_white">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="con_g_fo">
                  <h1>The Gaming Platform </h1>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-lg">
                    <div className="game_page_f">
                      <img src={ga_1} alt="image" />
                    </div>
                  </div>

                  <p>
                    The Mbits.io Gaming Platform is set to bring the lucrative
                    gaming industry into the hands of millions of people via
                    their smartphones. We’ll make it possible to create Dapps
                    and use our technology on a variety of other platforms as
                    well: PC, iOS, Android, PS4 (PS5) and Xbox (Xbox Two).
                  </p>

                  <p>
                    We will make it possible to tap into our diverse platform to
                    add blockchain capabilities and in-game currencies. For
                    example, making it possible for items to be tradable both
                    inside and outside of games with the Mbits Token. Everyone
                    can set up their own trading channels where you can list
                    items for free and gain profit when they are sold, turning
                    your digital assets into cash. Whatever digital assets you
                    have, you can trade them on The Mbits.io Gaming Platform.
                  </p>

                  <p>
                    The Mbits.io Gaming Platform can also own games, making all
                    thus holding Mbits Tokens “owner” of games. Game sales can
                    then drive the demand for the Mbits token.{" "}
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs hidden-sm hidden-xs hidden-md">
                <div className="game_page_f">
                  <img src={ga_1} alt="image" />
                </div>
              </div>

              <div className="a_p_der">
                <p>
                  E-sport is yet another place where the Mbits.io Gaming
                  Platform can take part. Here the audience can participate
                  interactively with the players. Both via video game live
                  streaming and via their Dapps/apps on events. You can also
                  participate or help your friend when watching them play
                  online.
                </p>

                <p>
                  All this will disrupt and give value back to the Mbits.io
                  platform, the users and investors. The future of gaming is
                  with The Mbits Gaming Platform; disruptive, decentralizing and
                  making you the master of your own gaming universe! Stay tuned
                  for more exciting gaming-news the near future!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="game_panel_do">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs hidden-sm hidden-md">
                <div className="game_page_f">
                  <img src={head_p} alt="image" />
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="con_g_fo">
                  <h1>The global market </h1>

                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-lg">
                    <div className="game_page_f">
                      <img src={head_p} alt="image" />
                    </div>
                  </div>

                  <p>
                    The gaming industry is gigantic, and the market has now
                    surpassed Hollywood. Video games have now higher incomes
                    than both the music and movie industries combined
                  </p>

                  <p>
                    According to Newzoo (2018), video games generate $134.9
                    billion in 2018, and almost 50% of this come from mobile
                    devices. Experts say that by 2021 the market can reach $174
                    billion.
                  </p>

                  <p>
                    Mbits.io are positioning ourselves to be part of this
                    growing market.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="char_on bg_white">
          <div className="container">
            <div className="heading_ch">
              <h1>Chart</h1>

              <img src={media133} />
            </div>
          </div>
        </section>

        <section className="bg_white">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="char_two">
                  <img src={global_ma} />
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="char_two">
                  <img src={two_g} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sec_pa_n">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-5 col-md-12 col-lg-5 hidden-lg">
                <div className="casino_img ">
                  <img src={casino} className="img-responsive" alt="Image" />
                </div>
              </div>

              <div className="col-xs-12 col-sm-7 col-md-12 col-lg-7">
                <div className="flo_im_te">
                  <p>
                    CASINOandLOTTERY.com is a project where The Mbits.io Gaming
                    Platform will be implemented.
                  </p>

                  <br />

                  <p>
                    This is an complete decentralized casino and lottery
                    platform on the blockchain, leveraging the Mbits technology.
                    To handle the load from users and transactions, it will
                    utilize the Mbits off-Chain hybrid solution, but verify it
                    on-chain. The Off-Chain approach is cryptographically signed
                    using public/private key pairs, and all communication is
                    self-authenticating, making sure the system is trustworthy.
                  </p>

                  <p>
                    The casino will be incorporated as its own separate and
                    independent legal entity with the appropriate licenses, in a
                    jurisdiction where casinos, lottery and sports betting is
                    legal.
                  </p>

                  <ul className="list-unstyled list_demo_s">
                    <li>Completely decentralized</li>

                    <li>Tied to the blockchain</li>

                    <li>Transparent, open and safe</li>

                    <li>Zero corruption</li>

                    <li>Will not scam you</li>

                    <li>Provable fair</li>

                    <li>Equality</li>
                  </ul>
                </div>
              </div>

              <div className="col-xs-12 col-sm-5 col-md-12 col-lg-5 hidden-xs hidden-sm hidden-md">
                <div className="casino_img">
                  <img src={casino} className="img-responsive" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg_white">
          <div className="container">
            <div className="conte_ga_sec">
              <h1>The online gambling markets.</h1>

              <p>
                Online gambling is legalized in more than 80 nations, and
                steadily increasing sins more and more countries around the
                world is adopting new and responsible online gambling
                regulations.In the US, three states is already allowing online
                gambling, and more states are expected to adopt similar
                regulations, as the government want to benefit from the tax
                revenues generated by the industry. This will lead to great
                growth in this region.The online gambling market is estimated to
                reach $81 billion by 2022.Mbits.io aim to take part in this
                industry, and develop responsible gambling even further with our
                technology.
              </p>

              <p>
                The market for online Casinos is estimated to reach about $60
                billion USD by 2020.
              </p>

              <h5>
                Size of the online gambling market from 2009 to 2020 (in billion
                U.S. dollars)
              </h5>

              <img src={rgam} />
            </div>
          </div>
        </section>

        <section className="sec_n_wr" style={{ backgroundColor: "white" }}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="ag_te">
                  <p>
                    To make our platform more popular for business developers,
                    we will give them different tools to success
                  </p>

                  <p>
                    Affiliates will be able to embed our games on their own
                    domain or create their own game-site with us. Affiliates
                    will also be able to send traffic to us with their own
                    unique affiliate-link, like other affiliate programs within
                    this industry does.
                  </p>

                  <p>
                    Approved companies, bloggers (300K followers and more),
                    brands etc. will be able to apply to opt-in to our white
                    labeling service and take part in our Casino Platform with
                    their own branding. The requirement to participate depends
                    on which package they choose, but they must deposit at least
                    1,500,000 MBITS Tokens to participate. This shall act as an
                    insurance for the platform. This will also drive the
                    scarcity of the token.
                  </p>

                  <p>
                    A separate White Paper explaining all this will be released
                    during the last quarter of 2019.
                  </p>

                  <p>
                    As mentioned above it’s extremely interesting for us to take
                    part in all these industries. If we combine all the markets;
                    The Gaming industry ($174 billion) and the Online Gambling
                    Market ($60 billion), the eCommerce market ($5tn by 2021),
                    and the other technologies Mbits.io are working on; our own
                    ad-platform, Supply chain Technology, democratizing AI, and
                    monetizing data, and we take all this into consideration, we
                    are looking at huge opportunities for the Mbits.io platform.
                  </p>
                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className="again_im">
                  <img src={ga_i_m} />
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
