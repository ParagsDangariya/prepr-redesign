import React, { Component } from "react";
import Link from "next/link";

class NavOne extends Component {
  constructor() {
    super();
    this.state = {
      sticky: false,
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);

    //Mobile Menu
    this.mobileMenu();

    //Search Toggle
    this.serachButton();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  mobileMenu = () => {
    //Mobile Menu Toggle
    let mainNavToggler = document.querySelector(".menu-toggler");
    let mainNav = document.querySelector(".main-navigation");

    mainNavToggler.addEventListener("click", function () {
      mainNav.style.display =
        mainNav.style.display != "block" ? "block" : "none";
    });
  };

  serachButton = () => {
    let searchToggle = document.querySelector(".search-toggle");
    let searchPopup = document.querySelector(".search-popup");
    let searchClose = document.querySelector(".cancel");
    let searchOverlay = document.querySelector(".search-overlay");

    searchToggle.addEventListener("click", function () {
      searchPopup.classList.add("active");
    });

    searchClose.addEventListener("click", function () {
      searchPopup.classList.remove("active");
    });

    searchOverlay.addEventListener("click", function () {
      searchPopup.classList.remove("active");
    });
  };

  render() {
    return (
      <header className="site-header site-header__header-one ">
        <nav
          className={`navbar navbar-expand-lg navbar-light header-navigation stricky ${
            this.state.sticky ? "stricked-menu stricky-fixed" : ""
          }`}
        >
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <Link href="/">
                <a className="navbar-brand">
                  <img
                    src="/assets/images/logo.png"
                    className="main-logo"
                    width="128"
                    alt="Awesome Image"
                  />
                </a>
              </Link>

              <button className="menu-toggler">
                <span className="kipso-icon-menu"></span>
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className="current">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <a href="#">Activities</a>
                  <ul className="sub-menu">
                    <li>
                      <Link href="/challenges">
                        <a>Challenges</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/labs">
                        <a>Labs</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/project">
                        <a>Projects</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <Link href="#">
                    <a>Achivements</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a>others</a>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link href="#">
                        <a>Organization</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>News Feeds</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Help</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Inbox</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Notifications</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a>Settings</a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="#">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <a
                className="header__search-btn search-popup__toggler search-toggle"
                href="#"
              >
                <i className="kipso-icon-magnifying-glass"></i>
              </a>
            </div>
          </div>
        </nav>
        <div className="site-header__decor">
          <div className="site-header__decor-row">
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-1"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-2"></div>
            </div>
            <div className="site-header__decor-single">
              <div className="site-header__decor-inner-3"></div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavOne;
