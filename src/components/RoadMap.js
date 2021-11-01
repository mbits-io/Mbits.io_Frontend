import React, {useState} from "react";

export default function RoadMap() {

  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (tabNo) => {
    setActiveTab(tabNo);
  }

  return (
    <section className="road_map_panle content-section mobile_h_dis" id="roadmap">
      <div className="container">
        <div className="blog_he">
          <h1>Road Map</h1>
        </div>
        <div className="main_sec_con_r">
          <div className="row">
            <div role="tabpanel">
              <div className="col-sm-8">
                <ul
                  className="nav nav-pills brand-pills nav-stacked"
                  role="tablist"
                >
                  <li role="presentation" onClick={() => handleTab(1)} className={activeTab === 1 ? "brand-nav active" : "brand-nav"}>
                    <a
                      href="#tab1"
                      aria-controls="tab1"
                      role="tab"
                      data-toggle="tab"
                    >
                      <h1>eCommerce technology </h1>
                      <div className="resource_sec">
                        <h5>Resources</h5>
                        
                      </div>
                      <div className="progress skill-bar ">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow="40"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{width:"40%"}}
                        >
                          <span className="skill">
                            PROGRESS <i className="val">40%</i>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li role="presentation" onClick={() => handleTab(2)} className={activeTab === 2 ? "brand-nav active" : "brand-nav"}>
                    <a
                      href="#tab2"
                      aria-controls="tab2"
                      role="tab"
                      data-toggle="tab"
                    >
                      <h1>Dashboard and platform development </h1>
                      <div className="resource_sec">
                        <h5>Resources</h5>
                        
                      </div>
                      <div className="progress skill-bar">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow="20"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{width:"20%"}}
                        >
                          <span className="skill">
                            PROGRESS<i className="val">20%</i>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li role="presentation" onClick={() => handleTab(3)} className={activeTab === 3 ? "brand-nav active" : "brand-nav"}>
                    <a
                      href="#tab3"
                      aria-controls="tab3"
                      role="tab"
                      data-toggle="tab"
                    >
                      <h1>Blockchain integration</h1>
                      <div className="resource_sec">
                        <h5>Resources</h5>
                        
                      </div>
                      <div className="progress skill-bar">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow="17"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{width:"17%"}}
                        >
                          <span className="skill">
                            PROGRESS<i className="val">10%</i>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li role="presentation" onClick={() => handleTab(4)} className={activeTab === 4 ? "brand-nav active" : "brand-nav"}>
                    <a
                      href="#tab4"
                      aria-controls="tab4"
                      role="tab"
                      data-toggle="tab"
                    >
                      <h1>Gaming platform</h1>
                      <div className="resource_sec">
                        <h5>Resources</h5>
                        
                      </div>
                      <div className="progress skill-bar">
                        <div
                          className="progress-bar progress-bar-success"
                          role="progressbar"
                          aria-valuenow="17"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{width:"17%"}}
                        >
                          <span className="skill">
                            PROGRESS<i className="val">10%</i>
                          </span>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4">
                <div className="tab-content">
                  <div role="tabpanel" className={activeTab === 1 ? "tab-pane active" : "tab-pane"} id="tab1">
                    <div className="conat_h_tab">
                      <h3>eCommerce technology</h3>
                      <ul className="road_map_data_list list-unstyled">
                        <li>
                          <p>Staff manager</p>
                        </li>
                        <li>
                          <p>Shareable product technology</p>
                        </li>
                        <li>
                          <p>Ticket support system for each store</p>
                        </li>
                        <li>
                          <p>The ShoppingRiot technology service</p>
                        </li>
                        <li>
                          <p>Social shopping technology</p>
                        </li>
                        <li>
                          <p>
                            Automatically setup and spinning up servers for
                            branding with your own domains
                          </p>
                        </li>
                        <li>
                          <p>Drag and drop website builder </p>
                        </li>
                        <li>
                          <p>API and synchronization service</p>
                        </li>
                        <li>
                          <p>Inventory management</p>
                        </li>
                        <li>
                          <p>Supply chain Technology</p>
                        </li>
                        <li>
                          <p>Payment gateway with escrow</p>
                        </li>
                        <li>
                          <p>Bitcoin integration</p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div role="tabpanel" className={activeTab === 2 ? "tab-pane active" : "tab-pane"} id="tab2">
                    <div className="conat_h_tab">
                      <h3>Dashboard and platform development</h3>
                      <ul className="road_map_data_list list-unstyled">
                        <li>
                          <p>Dashboard creator</p>
                        </li>
                        <li>
                          <p>Dashboard for eCommerce</p>
                        </li>
                        <li>
                          <p>Dashboard for our Ad-platform</p>
                        </li>
                        <li>
                          <p>
                            Dashboard for our DNA, CRISPR and stem cell
                            technology
                          </p>
                        </li>
                        <li>
                          <p>Dashboard for The Gaming Platform</p>
                        </li>
                        <li>
                          <p>Staff timesheet and time tracker system</p>
                        </li>
                        <li>
                          <p>
                            Machine learning, deep learning and AI algorithms in
                            collaboration with our partners / other tech
                            companies
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div role="tabpanel" className={activeTab === 3 ? "tab-pane active" : "tab-pane"} id="tab3">
                    <div className="conat_h_tab">
                      <h3>Blockchain integration</h3>
                      <ul className="road_map_data_list list-unstyled">
                        <li>
                          <p>
                            Bringing our Ai, Ad, gaming, eCommerce, Nano, Stem
                            Cell, DNA and CRISPR technology, along with our
                            Mbits.io wallet e.g. to the blockchain
                          </p>
                        </li>
                        <li>
                          <p>Smart contract integration</p>
                        </li>
                        <li>
                          <p>Token modeling</p>
                        </li>
                        <li>
                          <p>Tokenized affiliate and loyalty program</p>
                        </li>
                        <li>
                          <p>Tokenization of the top line</p>
                        </li>
                        <li>
                          <p>Fractional ownership</p>
                        </li>
                        <li>
                          <p>
                            Exploring the implementation of Zero Knowledge Proof
                            (zk-STARKs), Atomic swaps, hashed timelock
                            transactions/contracts, Dual-Key Stealth Addresses,
                            Ring Signatures and Secure Multiparty Computation,
                            Asymmetric encryption, together with two factor
                            authentication and biometrics.
                          </p>
                        </li>
                        <li>
                          <p>
                            Securing assets in crypto-vaults with multi-signing
                            features with multiple e-mails, software and HW
                            signing (e.g with your biometric profile)
                          </p>
                        </li>
                        <li>
                          <p>Proof of ownership, and transfer of value</p>
                        </li>
                        <li>
                          <p>
                            Decentralized Finance (DeFi), lending and how
                            collateral shall be placed
                          </p>
                        </li>
                        <li>
                          <p>
                            Exploring how to do a Security token sale and
                            integrating with liquid Decentralized Exchange (DEX)
                          </p>
                        </li>
                        <li>
                          <p>
                            Exploring if Reg A+ approval can be the right path
                            for us.
                          </p>
                        </li>
                        <li>
                          <p>
                            Finding ways to avoid regulatory exposure when not
                            holding/maintaining custody of our users’
                            Tokens/assets
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div role="tabpanel" className={activeTab === 4 ? "tab-pane active" : "tab-pane"} id="tab4">
                    <div className="conat_h_tab">
                      <h3>Gaming platform </h3>
                      <ul className="road_map_data_list list-unstyled">
                        <li>
                          <p>Tokenization of digital assets</p>
                        </li>
                        <li>
                          <p>Game investment</p>
                        </li>
                        <li>
                          <p>DApps and game integrations</p>
                        </li>
                        <li>
                          <p>API gaming platform</p>
                        </li>
                      </ul>
                    </div>
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
