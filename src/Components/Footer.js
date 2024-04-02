import React from 'react';
import { Container } from 'react-bootstrap';
import img from "./Images/HD-wallpaper-talha-with-names-talha-name-blue-neon-lights-happy-birtay-talha-popular-turkish-male-names-with-talha-name-thumbnail.jpg"
import "./Footer.css"
import { FaFacebookF } from "react-icons/fa6";
import { LiaInstagram } from "react-icons/lia";
import { TiSocialLinkedin } from "react-icons/ti";
import { ImWhatsapp } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { IoCallSharp } from "react-icons/io5";

const Footer = () => {
    return (
        <div className='footers'>
        <Container className='mt-5 pt-5'>
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1">
                <div className="col-lg-4 Footer-one p-4">
                    <img src={img} alt="" />
                    <p>Codexia offers a right development approach for delivering the right experience to our
                        customers. We develop and deliver cutting edge and innovative solutions based on your
                        needs and preferences so you can transform your business.
                    </p>
                    <ul className='footer-icons'>
                        <li><a href="https://www.facebook.com/" title='facebook' target='_blank'><FaFacebookF className='footer-icon' /></a></li>
                        <li><a href="https://www.instagram.com/" title='Instagram' target='_blank'><LiaInstagram className='footer-icon' /></a> </li>
                        <li><a href="https://pk.linkedin.com/" title='Linkedin' target='_blank'><TiSocialLinkedin className='footer-icon' /></a></li>
                        <li><a href="https://web.whatsapp.com/" title='Whatsapp' target='_blank'><ImWhatsapp className='footer-icon' /></a></li>
                    </ul>
                </div>
                <div className="col-lg-2 footer-two pt-4">
                    <h4>Quick Home</h4>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                        <li>Portfolio</li>
                    </ul>
                </div>
                <div className="col-lg-2 footer-two pt-4">
                    <h4>Services</h4>
                    <ul>
                        <li>Web Development</li>
                        <li>App Development</li>
                        <li>UI/UX Design</li>
                        <li>Enterprise Solution</li>
                        <li>Cloud Base Solution</li>
                        <li>SQA Engineer</li>
                    </ul>
                </div>
                <div className="col-lg-4 footer-three">
                    <h4 className='mt-4'>Contact Us</h4>
                    <ul className='p-0'>
                        <div className='d-flex'>
                            <div className='footer-three-icon'><FaLocationDot /></div>
                            <li>Office # 17, Fourth Floor, Ashrafi Tower, Commercial Zone 19,
                                Liberty Market, Gulberg III, Lahore, Pakistan
                            </li>
                        </div>
                        <div className='d-flex'>
                            <div className='footer-three-icon'><BiSolidMessageRoundedDetail /></div>
                            <li className='mt-1'>MuhamadTalha9279@gmail.com
                            </li>
                        </div>
                        <div className='d-flex'>
                            <div className='footer-three-icon'><IoCallSharp /></div>
                            <li className='mt-1'>+92-322-8487164
                            </li>
                        </div>
                        <div className='d-flex'>
                            <div className='footer-three-icon'><IoCallSharp /></div>
                            <li className='mt-2'>+92-322-8487164
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </Container>
        </div>
    );
}

export default Footer;
