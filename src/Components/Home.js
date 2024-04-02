import React, { useState, useEffect } from 'react';
import "./Home.css";
import img1 from "./Images/banner-bg.png";
import img2 from "./Images/HD-wallpaper-talha-with-names-talha-name-blue-neon-lights-happy-birtay-talha-popular-turkish-male-names-with-talha-name-thumbnail.jpg"
import { Container } from 'react-bootstrap';
import { FaConnectdevelop } from "react-icons/fa";
import { SiCodesignal } from "react-icons/si";
import { FaRegSun } from "react-icons/fa6";
import { ImMobile } from "react-icons/im";
import { MdOutlineLightbulbCircle } from "react-icons/md";
import { FiCloudRain } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { IoCloseSharp } from "react-icons/io5";
import img3 from "./Images/img3.png";
import img4 from "./Images/img4.png";
import img5 from "./Images/img5.png";
import img6 from "./Images/img6.png";
import img7 from "./Images/img7.png";
import img8 from "./Images/img8.png";
import Footer from './Footer';
import { RiseLoader } from 'react-spinners';

const Home = () => {
    const [loading, setloading] = useState(false);
    useEffect(() => {
      setloading(true)
      setTimeout(() => {
        setloading(false)
      }, 2000);
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
                <div className='homeheader'>
                    <Container>
                        <div className="row directions">
                            <div className="col-md-8  homesection">
                                <h1>
                                    We Are Information <span>technology.</span>
                                </h1>
                                <p>INNOVATIVE - RELIABLE - EFFICIENT - COST EFFECTIVE</p>
                            </div>
                            <div className="col-md-4 homesection">
                                <FaConnectdevelop className="App-logo" alt="logo" />
                            </div>
                        </div>

                    </Container>
                </div>
                <div className='card-section'>
                    <h1>What We Provide ?</h1>
                    <Container>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-100">
                            <div className="col ">
                                <div className="height-fixed card  text-white">
                                    <div className='images-card'>
                                        <SiCodesignal className='image-icon' />
                                    </div>
                                    <div className="card-img-overlay">
                                        <h2 className="card-title">UI/UX Design</h2>
                                        <p className="card-text">UI/UX design is the process of creating user interfaces that
                                            are both easy to use and aesthetically pleasing. It's about understanding the
                                            needs of your users and designing a product that meets those needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="height-fixed card  text-white">
                                    <div className='images-card'>
                                        <FaRegSun className='image-icon' />
                                    </div>
                                    <div className="card-img-overlay">
                                        <h2 className="card-title">WEB DEVELOPMENT</h2>
                                        <p className="card-text">Leveraging new approaches to web development including
                                            progressive web apps, we bring development and architecture ability together
                                            to deliver on your business need and maximize delivery speed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="height-fixed card  text-white">
                                    <div className='images-card'>
                                        <ImMobile className='image-icon' />
                                    </div>
                                    <div className="card-img-overlay">
                                        <h2 className="card-title">APP DEVELOPMENT</h2>
                                        <p className="card-text">We develop Mobile apps for Android and iOS platforms which
                                            are efficient, Pleasant i.e easy to navigate GUI and adhere to standards
                                            & according to the need of Customer.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="height-fixed card  text-white">
                                    <div className='images-card'>
                                        <MdOutlineLightbulbCircle className='image-icon' />
                                    </div>
                                    <div className="card-img-overlay">
                                        <h2 className="card-title">ENTERPRISE SOLUTIONS</h2>
                                        <p className="card-text">We deliver solutions that enhance your organization’s
                                            productivity by enriching employee experience, streamlining business processes
                                            and improving customer experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="height-fixed card  text-white">
                                    <div className='images-card'>
                                        <FiCloudRain className='image-icon' />
                                    </div>
                                    <div className="card-img-overlay">
                                        <h2 className="card-title">Cloud BASED SOLUTIONS</h2>
                                        <p className="card-text">Codexia Tech Shortens time to develop and launch new
                                            solutions, or test and deploy prototypes with
                                            IaaS-based applications on Amazon Web Services, Heroku, Microsoft Azure or
                                            Google Cloud.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col ">
                                <div className="height-fixed card  text-white">
                                    <div className='images-card'>
                                        <FiCloudRain className='image-icon' />
                                    </div>
                                    <div className="card-img-overlay">
                                        <h2 className="card-title">SQA Engineering</h2>
                                        <p className="card-text">We are committed to quality of operations and projects,
                                            we steer ahead with a clear vision: to transform the concept of quality from
                                            a bottleneck to the bottom line for companies. We use latest technologies
                                            in innovative ways to produce optimum output.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div>
                <nav className="navbar navbar-light px-3">
                    <ul className="nav nav-pills section-s">
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading1">Angular.Js</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading2">React.Js</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#scrollspyHeading3">Vue.Js</a>
                        </li>
                    </ul>
                </nav>
                <Container className='table-content table-responsive'>
                    <table className="table caption-top ">
                        <thead>
                            <tr>
                                <th scope="col" className='w-25'></th>
                                <th scope="col" className='w-25'>Cracking the Coding Interview</th>
                                <th scope="col" className='w-25 ps-5'>LeetCode</th>
                                <th scope="col" className='w-25 ps-5'>Experties</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr id="scrollspyHeading1">
                                <th scope="row">100+ Practice Questions</th>
                                <td><TiTick className='table-icon' /></td>
                                <td><TiTick className='table-icon' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                            <tr>
                                <th scope="row"> Structures Content</th>
                                <td><TiTick className='table-icon' /></td>
                                <td><TiTick className='table-icon' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                            <tr>
                                <th scope="row">Guided Format</th>
                                <td><IoCloseSharp className='table-icon' /></td>
                                <td><TiTick className='table-icon' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                            <tr id='scrollspyHeading2'>
                                <th scope="row">Coding Workspace</th>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><TiTick className='table-icon' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                            <tr >
                                <th scope="row">Programming Languages</th>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><TiTick className='table-icon' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                            <tr>
                                <th scope="row">High-Quality Solutions</th>
                                <td><TiTick className='table-icon' /></td>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                            <tr>
                                <th scope="row">Video Explanations</th>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                            <tr id='scrollspyHeading3'>
                                <th scope="row">Mock Interviews</th>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                            <tr>
                                <th scope="row">All-In-One Platform</th>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><IoCloseSharp className='table-icon-one' /></td>
                                <td><TiTick className='table-icon' /></td>
                            </tr>
                        </tbody>
                    </table>
                </Container>
                <Container className='logos mt-5'>
                    <div className='Outcomes'>
                        <h1>With Great Outcomes</h1>
                        <p>Our customers have gotten offers from awesome companies.</p>
                    </div>
                    <div className="logos">
                        <div className="logos-slide">
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" className='mt-4' />
                            <img src={img6} alt="" />
                            <img src={img7} alt="" />
                            <img src={img8} alt="" />
                        </div>
                        <div className="logos-slide">
                            <img src={img3} alt="" />
                            <img src={img4} alt="" />
                            <img src={img5} alt="" className='mt-4' />
                            <img src={img6} alt="" />
                            <img src={img7} alt="" />
                            <img src={img8} alt="" />
                        </div>
                    </div>

                </Container>
                <Footer />
            </div>
            }
            
        </div>
    );
}

export default Home;
