import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) { 
  return (
    <div className="sidebar-navigation hidde-sm hidden-xs">
      <nav className="desk_n_sec">
        <ul>
          <li className="click_show_d">
            <a href="/#top">
              <span className="rect"></span>
              <i className="fa fa-home" aria-hidden="true"></i>
              <b className="menu_name">Home</b>
            </a>
          </li>
          <li className="click_show_d">
            <a href="/#intro">
              <span className="rect"></span>
              <i className="fa fa-info-circle" aria-hidden="true"></i>
              <b className="menu_name">Introduction</b>
            </a>
          </li>
          <li className="click_show_d">
            <a href="/#video">
              <span className="rect"></span>
              <i className="fa fa-video-camera" aria-hidden="true"></i>
              <b className="menu_name">Explainer videos</b>
            </a>
          </li>
          <li className="click_show_d">
            <a href="/#tocken">
              <span className="rect"></span>
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
              <b className="menu_name">paper, Token & Donation</b>
            </a>
          </li>
          <li className="click_show_d">
            <a href="/#blog">
              <span className="rect"></span>
              <i className="fa fa-rss" aria-hidden="true"></i>
              <b className="menu_name">Blog</b>
            </a>
          </li>
          <li className="click_show_d">
            <a href="/#roadmap">
              <span className="rect"></span>
              <i className="fa fa-area-chart" aria-hidden="true"></i>
              <b className="menu_name">Roadmap</b>
            </a>
          </li>
          <li className="click_show_d">
            <a href="/#technology">
              <span className="rect"></span>
              <i className="fa fa-microchip" aria-hidden="true"></i>
              <b className="menu_name">Technology</b>
            </a>
          </li>
          <li className="click_show_d">
            <a href="/#flow_chart">
              <span className="rect"></span>
              <i className="fa fa-line-chart" aria-hidden="true"></i>
              <b className="menu_name">Flow Chart</b>
            </a>
          </li>
          <li className="click_show_d">
            <Link to="/game">
              <span className="rect"></span>
              <i className="fa fa-gamepad" aria-hidden="true"></i>
              <b className="menu_name">Gaming Platform</b>
            </Link>
          </li>
          <li className="click_show_d">
            <Link to="/zero-knowledge">
              <span className="rect"></span>
              <i className="fa fa-expand" aria-hidden="true"></i>
              <b className="menu_name">Zero Knowledge</b>
            </Link>
          </li>
          <li className="click_show_d">
            <a href="/#team">
              <span className="rect"></span>
              <i className="fa fa-users" aria-hidden="true"></i>
              <b className="menu_name">Executive Team</b>
            </a>
          </li>

          {props.pageData &&
            props.pageData.map((page) => {
              return (
                <li className="click_show_d" key={page.title}>
                  <Link to={"/page/" + page.route}>
                    <span className="rect"></span>
                    <i className="fa fa-users" aria-hidden="true"></i>
                    <b className="menu_name">{page.title}</b>
                  </Link>
                </li>
              );
            })}
        </ul>
      </nav>
    </div>
  );
}
