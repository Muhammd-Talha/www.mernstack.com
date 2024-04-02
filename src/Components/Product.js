import React, { useState, useEffect } from 'react';
import { HiUserGroup } from "react-icons/hi2";
import { TbSettingsAutomation } from "react-icons/tb";
import { LiaTelegramPlane } from "react-icons/lia";
import { GiDiamonds } from "react-icons/gi";
import { GrTestDesktop } from "react-icons/gr";
import { FaCloudShowersHeavy } from "react-icons/fa";
import Footer from './Footer';
import "./Product.css"
import { Container } from '@mui/material';
import img1 from "./Images/product-img-1.webp";
import img2 from "./Images/product-img-2.webp";
import img3 from "./Images/product-img-3.webp";
import img4 from "./Images/product-img-4.webp";
import img5 from "./Images/product-img-5.webp";
import img6 from "./Images/product-img-6.webp";
import img7 from "./Images/product-img-7.webp";
import img8 from "./Images/product-img-8.webp";
import img9 from "./Images/product-img-9.webp";
import img10 from "./Images/product-img-10.webp";
import img11 from "./Images/product-img-11.webp";
import img12 from "./Images/product-img-12.webp";
import img13 from "./Images/product-img-13.webp";
import img14 from "./Images/product-img-14.jpg";
import img15 from "./Images/product-img-15.webp";
import { RiseLoader } from 'react-spinners';

const Product = () => {
    const [counterstart, setcounterstart] = useState(false)
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1000);
    }, [])
    return (
        <div>
            {
                loading ?
                    <div className='loader-tag'>
                        <RiseLoader
                            color={"#284D91"}
                            loading={loading}
                            // cssOverride={override}
                            size={15}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    :
                    <div>
                        <div className="row w-100 headers-section">
                            <div className="col-xl-6 col-lg-5 col-md-4 border products pt-5 ps-5">
                                <h5 className='pb-3'>Technology Design Innovation</h5>
                                <h2>Building Custom Software Solutions</h2>
                                <p className='after-p'>For Startup & Enterprises</p>
                                <p className='after-content'>Tech is a trusted technology partner that offer custom <span>software</span> development services to deliver
                                    <span> intelligent, innovation & scalable </span> digital <span>solution</span>
                                </p>
                            </div>
                            <div className="col-xl-6 col-lg-7 col-md-8">
                                <div className="row division">
                                    <div className="col align">
                                        <div className="row circle top-effect">
                                            <div className='resources'>
                                                <HiUserGroup className='resources-icon' />
                                                <p className='fw-bold'>Resource Augmentation</p>
                                                <p className='fontsize'>Onshore / Offshore Development Team</p>
                                            </div>
                                        </div>
                                        <div className="row circle">
                                            <div className='resources'>
                                                <TbSettingsAutomation className='resources-icon' />
                                                <p className='fw-bold'>Resource Augmentation</p>
                                                <p className='fontsize'>Onshore / Offshore Development Team</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col section">
                                        <div className="row circle ">
                                            <div className='resources'>
                                                <LiaTelegramPlane className='resources-icon' />
                                                <p className='fw-bold'>MPV Development</p>
                                                <p className='fontsize'>Prototyping & Fast to marker</p>
                                            </div>
                                        </div>
                                        <div className="row circle hiddens">
                                            <h5>Blockchain</h5>
                                        </div>
                                        <div className="row circle ">
                                            <div className='resources'>
                                                <GiDiamonds className='resources-icon' />
                                                <p className='fw-bold'>Quality Assurence</p>
                                                <p className='fontsize'>Secure and Test Products</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col align">
                                        <div className="row circle">
                                            <div className='resources'>
                                                <GrTestDesktop className='resources-icon' />
                                                <p className='fw-bold'>Products Development</p>
                                                <p className='fontsize'>UI/UX User Testing </p>
                                            </div>
                                        </div>
                                        <div className="row circle">
                                            <div className='resources'>
                                                <FaCloudShowersHeavy className='resources-icon' />
                                                <p className='fw-bold'>Devops & Cloud</p>
                                                <p className='fontsize'>Automate the software delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row product-footer'>
                                <h2>Intelligent, Powerfull, flexible, scalable digital <br />
                                    solution for your bussiness</h2>
                            </div>
                        </div>
                        <Container>
                            <div className="card-group">
                                <div className="card">
                                    <img src={img1} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img2} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img3} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img4} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card">
                                    <img src={img5} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img6} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img7} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img8} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card">
                                    <img src={img9} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img10} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img11} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img12} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="card-group">
                                <div className="card">
                                    <img src={img13} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img14} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img15} className="card-img-top" alt="..." />
                                </div>
                                <div className="card">
                                    <img src={img2} className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </Container>
                        <Footer />
                    </div>
            }
        </div>
    );
}

export default Product;
