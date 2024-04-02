import React, { useState, useEffect } from 'react';
import { Container, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { RiMenuSearchLine } from "react-icons/ri";
import { SiMaterialdesignicons } from "react-icons/si";
import { SiArkecosystem } from "react-icons/si";
import { SiFrontendmentor } from "react-icons/si";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { FaReact } from "react-icons/fa6";
import { RiAngularjsLine } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";
import { AiOutlineNodeIndex } from "react-icons/ai";
import { BsFiletypePhp } from "react-icons/bs";
import { SiBattledotnet } from "react-icons/si";
import { ImManWoman } from "react-icons/im";
import Footer from "./Footer"
import "./Content.css"
import { RiseLoader } from 'react-spinners';

const Content = () => {
    const navigate = useNavigate()
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
                        <div className='content-part'>
                            <h1>The secret sause</h1>
                            <label>All the resources you need to prepare for technical interviews.</label> <br />
                            <div>
                                <button onClick={() => navigate("/")}>Go To Home Page</button>
                            </div>
                        </div>
                        <ul className="nav nav-pills collase-btn mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">System Expert</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Frontend Expert</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Backend Expert</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contactone" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Bonus</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                <Container className='contentpart'>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <RiMenuSearchLine className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Systems Design Content Index</h5>
                                                    <label className="card-text pb-5">Your systems design and development journey starts here.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <SiMaterialdesignicons className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Systems Design Fundamentals</h5>
                                                    <p className="card-text pb-5">The essential components to design any large-scale distributed system.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <SiArkecosystem className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Systems Design Questions</h5>
                                                    <p className="card-text pb-5">Our collection of questions to crush the systems design interviews.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                <Container className='contentpart'>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <SiFrontendmentor className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Frontend Content Index</h5>
                                                    <label className="card-text pb-5">Your systems design and development journey starts here.</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <SiMaterialdesignicons className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Frontend Interview Questions</h5>
                                                    <p className="card-text pb-5">Our collection of coding questions to crush the frontend interviews.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <HiMiniCodeBracket className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">HTML Crash Course</h5>
                                                    <p className="card-text pb-5">The necessary HTML concepts to tackle the frontend interviews.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <FaReact className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">React.Js</h5>
                                                    <p className="card-text pb-5">It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <RiAngularjsLine className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Angular.Js</h5>
                                                    <p className="card-text pb-5">AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components  </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <FaVuejs className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Vue.Js</h5>
                                                    <p className="card-text pb-5">Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <Container className='contentpart'>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <AiOutlineNodeIndex className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Node.Js</h5>
                                                    <label className="card-text pb-5">Node. js (Node) is an Open Source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <BsFiletypePhp className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">PHP Language</h5>
                                                    <p className="card-text pb-5">(PHP: Hypertext Preprocessor) An extremely popular scripting language that is used to create dynamic Web pages. Combining syntax from the C, Java and Perl languages, </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <SiBattledotnet className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">DotNet</h5>
                                                    <p className="card-text pb-5">. NET is an open-source platform for building desktop, web, and mobile applications that can run natively on any operating system. The . NET system includes tools, libraries.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                            <div className="tab-pane fade" id="pills-contactone" role="tabpanel" aria-labelledby="pills-contact-tab">
                                <Container className='contentpart'>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        <div className="col">
                                            <div className="card">
                                                <div className='m-auto pt-4'>
                                                    <ImManWoman className='card-icon' />
                                                </div>
                                                <div className="card-body">
                                                    <h5 className="card-title">Behavioral Interview Prep</h5>
                                                    <label className="card-text pb-5">Our curated content to nail the behavioral interviews. </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>
                        <Footer />
                    </div>
            }

        </div>
    );
}

export default Content;
