import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import img1 from "./Images/about-imag.jpg";
import "./AboutUs.css";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import img2 from "./Images/business-man-character_1308-102261.avif";
import img3 from "./Images/cartoon-business-man-standing-businessman-isolated-vector-19197757.jpg"
import img4 from "./Images/a-businessman-standing-vector-1855690.jpg"
import Footer from "./Footer"
import { NavLink } from 'react-router-dom';
import { RiseLoader } from 'react-spinners';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img6 from "./Images/download (1).jpg";
import img7 from "./Images/(download) 2.jpg";
import img8 from "./Images/(download) 3.png";
import img9 from "./Images/(download) 4.webp";
import img10 from "./Images/(download) 5.jpg";
import img11 from "./Images/(download) 6.jpg";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block",  }}
            onClick={onClick}
        />
    );
}

const AboutUs = () => {
    const [counterstart, setcounterstart] = useState(false)
    const [loading, setloading] = useState(false);
    useEffect(() => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
        }, 1000);
    }, [])
    var settings = {
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


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
                        <Container>
                            <div className="row w-100">
                                <div className="col-md-7 about">
                                    <h1><span>CODEXIA </span> AT GLANCE</h1>
                                    <p>Codexia offers a right development approach for delivering the right experience
                                        to our customers. We develop and deliver cutting edge and innovative solutions
                                        based on your needs and preferences so you can transform your business.
                                    </p>
                                    <nav aria-label="breadcrumb" >
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"> <li className='fw-bold fs-5'><NavLink className='anchor-tag' to={"/"}>Go To Home Page</NavLink></li></li>
                                            <li className="breadcrumb-item active fs-5" aria-current="page">About Us</li>
                                        </ol>
                                    </nav>
                                </div>
                                <div className="col-md-5 about-image">
                                    <img src={img1} alt="" />
                                </div>
                            </div>
                            <div className="row about-section">
                                <h1>Who We Are ?</h1>
                                <p>We have diverse team of professionals, talented and experienced software engineers and
                                    designers with years of experience that focus exclusively on web, iPhone and Android
                                    app development.
                                </p>
                                <p>We contribute to open source projects and genuinely enjoy coding to provide unmatched
                                    services in the development and design industry.
                                </p>
                                <ScrollTrigger onEnter={() => setcounterstart(true)} onExit={() => setcounterstart(false)}>
                                    <div className='row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1'>
                                        {counterstart ?
                                            <div className="col counter-up">
                                                <CountUp className='counter' start={0} end={6} duration={7} delay={0} /><span className='counter'>+</span>
                                                <p>YEARS OF EXCELLENCE</p>
                                            </div>
                                            :
                                            null
                                        }
                                        {counterstart ?
                                            <div className="col counter-up">
                                                <CountUp className='counter' start={0} end={70} duration={7} delay={0} /><span className='counter'>+</span>
                                                <p>PROJECTS COMPLETED</p>
                                            </div>
                                            :
                                            null
                                        }
                                        {
                                            counterstart ?
                                                <div className="col counter-up">
                                                    <CountUp className='counter' start={0} end={20} duration={7} delay={0} /><span className='counter'>+</span>
                                                    <p>CLIENTS</p>
                                                </div>
                                                :
                                                null
                                        }
                                        {counterstart ?
                                            <div className="col counter-up">
                                                <CountUp className='counter' start={0} end={30} duration={7} delay={0} /><span className='counter'>+</span>
                                                <p>TECH EXPERTS</p>
                                            </div>
                                            :
                                            null
                                        }
                                    </div>
                                </ScrollTrigger>

                            </div>
                        </Container>
                        <Container>
                            <div className="row about-second">
                                <h1>What We Aim?</h1>
                                <p>To give customers the most compelling experience throught state of technology, innovation,
                                    cost-effectiveness, leadershipand partnership and leaving the positive impirits on society
                                </p>
                            </div>
                            <div className="row about-third">
                                <h1>Our vision</h1>
                                <p>To be the partner of choice for the world leading software services provider andand enterprises
                                    by creating , building and maintaining the most innovation and cost effective software product.
                                    We are committed to achieve bussiness and financial success while leaving a positive impact.
                                </p>
                                <div>- Famalia</div>
                            </div>
                        </Container>
                        <Container>
                            <h1 className='team-heading'>Our Team Members</h1>
                            <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-1 row-cols-1 w-100 ">
                                <div className="box col">
                                    <img src={img2} alt="" />
                                    <div className='box-content'>
                                        <h2>CEO</h2>
                                        <div>
                                            My self Muhammad Talha Mern Stack Developer. I am BSIT student from GCUF. I am experience in Developer with 6 year of experience.
                                        </div>
                                    </div>
                                </div>
                                <div className="box col">
                                    <img src={img3} alt="" />
                                    <div className='box-content'>
                                        <h2>CTO</h2>
                                        <div>
                                            My self Muhammad Wali FrontEnd Stack Developer. I am BSIT student from Punjab Univrsity. I am experience in Developer with 4 year of experience.
                                        </div>
                                    </div>
                                </div>
                                <div className="box col">
                                    <img src={img4} alt="" />
                                    <div className='box-content'>
                                        <h2>CO</h2>
                                        <div>
                                            My self Muhammad Wali Dotnet Stack Developer. I am BSCS student from Namal Univrsity. I am experience in Developer with 10 year of experience.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Container>
                        <Container>
                            <div className='client-s'>
                                <h1>Client's Feedback</h1>
                            </div>
                            <Slider {...settings}>
                                <div className='card testimonial' style={{ border: "none" }}>
                                    <div className='images-content'>
                                        <img src={img6} alt="" className="" />
                                    </div>
                                    <div className="card-body">
                                        <h2>Michael Javed</h2>
                                        <p>"Empowering businesses through flawless code. Client feedback fuels our innovation.
                                            Crafting software solutions, client smiles our reward. Excellence in development, client
                                            satisfaction, businesses through flawless code. our hallmark."
                                        </p>
                                    </div>
                                </div>
                                <div className='card testimonial'>
                                    <div className='images-content'>
                                        <img src={img7} alt="" className="" />
                                    </div>
                                    <div className="card-body">
                                        <h2>Katrina Worgrass</h2>
                                        <p>" Business Executive: Where client feedback meets excellence in every line of code.
                                            Delivering tailored solutions, one satisfied client at a time. Empowering businesses
                                            with precision and passion, Delivering tailored solutions. Your success, our priority."
                                        </p>
                                    </div>
                                </div>
                                <div className='card testimonial'>
                                    <div className='images-content'>
                                        <img src={img8} alt="" className="" />
                                    </div>
                                    <div className="card-body">
                                        <h2>Jordan Gry</h2>
                                        <p>Our social media campaigns exceeded expectations! Engaging content, amplified reach,
                                            and tangible results. Trust us to elevate your brand's online presence.Experience the power of
                                            strategic marketing with us. Elevate your brand's online presence today."
                                        </p>
                                    </div>
                                </div>
                                <div className='card testimonial'>
                                    <div className='images-content'>
                                        <img src={img9} alt="" className="" />
                                    </div>
                                    <div className="card-body">
                                        <h2>Elizabeth</h2>
                                        <p>Seamless solutions, impeccable code. Exceeding expectations, one project at a time.
                                            Our projects delivered with precision and speed.Trust us to elevate your digital presence
                                            with precision and expertise projects delivered with precision and speed."
                                        </p>
                                    </div>
                                </div>
                                <div className='card testimonial'>
                                    <div className='images-content'>
                                        <img src={img10} alt="" className="" />
                                    </div>
                                    <div className="card-body">
                                        <h2>Marked clavy</h2>
                                        <p>"MERN Stack excellence demonstrated. Our projects embody efficiency and innovation. Elevate
                                            your digital presence with our seamless solutions. Trust our expertise for your next tech
                                            venture.Elevating your digital presence with seamless solutions."
                                        </p>
                                    </div>
                                </div>
                                <div className='card testimonial'>
                                    <div className='images-content'>
                                        <img src={img11} alt="" className="" />
                                    </div>
                                    <div className="card-body">
                                        <h2>Monica Lopez</h2>
                                        <p>
                                            "PHP expertise shining through our projects. Consistently delivering scalable and efficient solutions.
                                            Elevating your online presence with seamless PHP development. Trust our team to exceed your
                                            expectations. Experience the power of PHP innovation today."
                                        </p>
                                    </div>
                                </div>
                            </Slider>

                        </Container>
                        <Footer />
                    </div>

            }

        </div>
    );
}

export default AboutUs;
