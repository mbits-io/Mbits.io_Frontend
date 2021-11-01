import React  from "react";
import { Link } from "react-router-dom";

export default function MobileMenu(props) {
  
  return (
    <ul className="list-unstyled">
      <li>
        <a className={props?.mainProps?.location?.hash === "#top" ? "active-section" : ""} href="/#top">
          <i className="fa fa-home" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Home</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.hash === "#intro" ? "active-section" : ""} href="/#intro">
          <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Introduction</span>{" "}
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.hash === "#video" ? "active-section" : ""} href="/#video">
          <i className="fa fa-video-camera" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Explainer videos</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.hash === "#tocken" ? "active-section" : ""} href="/#tocken">
          <i className="fa fa-file-text-o" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>paper, Token & Donation</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.hash === "#blog" ? "active-section" : ""} href="/#blog">
          <i className="fa fa-rss" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Blog</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.hash === "#roadmap_m" ? "active-section" : ""} href="/#roadmap_m">
          <i className="fa fa-area-chart" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Roadmap</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.hash === "#technology" ? "active-section" : ""} href="/#technology">
          <i className="fa fa-microchip" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Technology</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.hash === "#flow_chart" ? "active-section" : ""} href="/#flow_chart">
          <i className="fa fa-line-chart" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Flow Chart</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.pathname === "/game" ? "active-section" : "game_ad_a"} href="/game">
          <i className="fa fa-gamepad" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Gaming Platform</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.pathname === "zero_knowledge" ? "active-section" : "zero_ad_a"} href="/zero-knowledge">
          {" "}
          <i className="fa fa-expand" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Zero Knowledge</span>
        </a>
      </li>

      <li>
        <a className={props?.mainProps?.location?.hash === "#team" ? "active-section" : ""} href="/#team">
          <i className="fa fa-users" aria-hidden="true"></i>{" "}
          <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>Executive Team</span>
        </a>
      </li>

      {props.pageData &&
        props.pageData.map((page) => {
          return (
            <li key={page.title}>
              <Link to={"/page/" + page.route}>
                <i className="fa fa-users" aria-hidden="true"></i>
                <span className={props.menuClass === "sub-menu open oppenned" ? "anim_to" : ""}>{page.title}</span>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
