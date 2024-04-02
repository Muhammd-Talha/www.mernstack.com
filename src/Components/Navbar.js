import React from 'react';
import { useState } from 'react';
import img1 from "./Images/HD-wallpaper-talha-with-names-talha-name-blue-neon-lights-happy-birtay-talha-popular-turkish-male-names-with-talha-name-thumbnail.jpg"
import "./Navbar.css"
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaBarsStaggered } from "react-icons/fa6";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <div className='nav-header'>
            <div className='nav-header-one'>
                <div className='nav-images'>
                    <img src={img1} alt="" />
                </div>
                <div className='navbar-unorderlist'>
                    <ul>
                        <li><NavLink className='anchor-tag' to={"/aboutUs"}>About Us</NavLink> </li>
                        <li><NavLink to={"/product"} className='anchor-tag'>Products</NavLink></li>
                        <li><NavLink to={"/content"} className='anchor-tag'>Content</NavLink></li>
                        <li><NavLink to={"/systemExpert"} className='anchor-tag'>System Experts</NavLink></li>
                    </ul>
                </div>
                <div className='nav-button'>
                    <NavLink to={"/getintouch"}><button>Get In Touch</button></NavLink>
                </div>
                <div className='d-md-none nav-icon'>
                    {/* <a class="" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <FaBarsStaggered className='icon' />
                    </a>
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                        </div>
                    </div> */}
                </div>
            </div>
            <nav className={`navbar navbar-expand-lg navbar-light bg-light d-md-none ${isNavOpen ? 'show' : ''}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className='navimages'>
                            <img src={img1} alt="" />
                        </div>
                    </a>
                    <button onClick={toggleNav}  className="navbar-toggler ofcanvas-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <HiOutlineBars3CenterLeft className="smalllscrn-icon" />
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}  id="navbarSupportedContent">
                        <ul className="navbar-nav unorderlist-tag me-auto mb-2 mb-lg-0 tagclass">
                            <li className="nav-item list-tags">
                                <NavLink onClick={closeNav} className='anchor-tag' to={"/aboutUs"}>About Us</NavLink>
                            </li>
                            <li className="nav-item list-tags">
                                <li><NavLink onClick={closeNav} to={"/product"} className='anchor-tag'>Products</NavLink></li>
                            </li>
                            <li className="nav-item list-tags">
                                <li><NavLink onClick={closeNav} to={"/content"} className='anchor-tag' style={{ marginLeft: "-10px" }}>Content</NavLink></li>
                            </li>
                            <li className="nav-item list-tags">
                                <li><NavLink onClick={closeNav} to={"/systemExpert"} className='anchor-tag' style={{ marginLeft: "45px" }}>System Experts</NavLink></li>
                            </li>
                            <div className='smallscren-button'>
                                <NavLink onClick={closeNav} to={"/getintouch"}><button>Get In Touch</button></NavLink>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
