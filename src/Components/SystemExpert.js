import React, { useState, useEffect } from 'react';
import "./SystemExpert.css"
import { Container } from 'react-bootstrap';
import { TiTick } from "react-icons/ti";
import Footer from './Footer';
import { RiseLoader } from 'react-spinners';

const SystemExpert = () => {
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
                    <div className='systemexpert'>
                        <div className='expert-headers'>
                            <Container>
                                <h1>We Turn Ideas Into Your Reality</h1>
                                <p>The database component, storing data in a flexible, scalable, NoSQL format.
                                    Provides a framework for building robust web applications and APIs in Node.js.
                                    A front-end library for building interactive user interfaces in JavaScript.
                                    The back-end JavaScript runtime environment, facilitating server-side logic and operations.
                                    MERN stack enables seamless integration between front-end (React.js) and back-end (Node.js
                                    with Express.js), allowing for efficient development of full-stack web applications.
                                </p>
                            </Container>
                        </div>
                        <div className='system-section'>
                            <Container>
                                <h1>Our Story</h1>
                                <p>Techcreatix started back in 2015 from a garage in Lahore and now after around 3+ years going
                                    strong and still growing. Since then, we've helped a wide range of startups & enterprises
                                    deliver innovative solutions with our technology, innovation, design
                                    and engineering ensuring multiple successes in a quite a few verticals.
                                    <br />
                                    We helped our startup partners successfully raise funds over US $100 million and
                                    transitioned into a profitable business with valuations more than US $4 Billion.
                                    Our enterprise partners have remarkable success in the fintech industry with
                                    innovative solutions revolutionizing the way merchants process payments.
                                </p>
                                <h1>Back To Future</h1>
                                <p>Our journey started with a small vision to build better quality software with transparency
                                    for the clients and has transformed into a mission to provide world-class solutions to
                                    empower enterprises across the globe with better software products delivery.</p>
                                <h1 className='pb-3'>Our Core Values</h1>
                            </Container>
                            <Container>
                                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4 system-s">
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">SystemsExpert</h5>
                                                <div>
                                                    <li><TiTick className='system-list-icons' /> 200 of the best coding interview questions.</li>
                                                    <li><TiTick className='system-list-icons' /> Crystal-clear two-part video explanations.</li>
                                                    <li><TiTick className='system-list-icons' /> In-depth space-time complexity analyses.</li>
                                                    <li><TiTick className='system-list-icons' /> Written code solutions in 9 languages.</li>
                                                    <li><TiTick className='system-list-icons' /> Unlockable certificate of completion.</li>
                                                    <li><TiTick className='system-list-icons' /> A crash course on data structures.</li>
                                                    <li><TiTick className='system-list-icons' /> A feature-rich in-browser IDE.</li>
                                                    <li><TiTick className='system-list-icons' /> 4 timed coding assessments.</li>
                                                    <li><TiTick className='system-list-icons' /> Bonus behavioral interview content.</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">BlockchainExpert</h5>
                                                <div>
                                                    <li><TiTick className='system-list-icons' /> The best blockchain-education platform.</li>
                                                    <li><TiTick className='system-list-icons' /> A comprehensive blockchain curriculum.</li>
                                                    <li><TiTick className='system-list-icons' /> Designed, taught, and reviewed by experts.</li>
                                                    <li><TiTick className='system-list-icons' /> A feature-rich Solidity coding workspace.</li>
                                                    <li><TiTick className='system-list-icons' />Nearly a hundred high-quality videos.</li>
                                                    <li><TiTick className='system-list-icons' />Hundreds of practice questions.</li>
                                                    <li><TiTick className='system-list-icons' />Practical blockchain projects.</li>
                                                    <li><TiTick className='system-list-icons' />A certificate of completion.</li>
                                                    <li><TiTick className='system-list-icons' />Bonus behavioral interview content.</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">FrontendExpert</h5>
                                                <div>
                                                    <li><TiTick className='system-list-icons' />50 of the best frontend interview questions.</li>
                                                    <li><TiTick className='system-list-icons' />An exhaustive course on HTML.</li>
                                                    <li><TiTick className='system-list-icons' />An exhaustive course on CSS.</li>
                                                    <li><TiTick className='system-list-icons' />An exhaustive course on JavaScript.</li>
                                                    <li><TiTick className='system-list-icons' />Comprehensive video explanations.</li>
                                                    <li><TiTick className='system-list-icons' />Unlockable certificate of success.</li>
                                                    <li><TiTick className='system-list-icons' />A feature-rich in-browser IDE.</li>
                                                    <li><TiTick className='system-list-icons' />A timed frontend quiz.</li>
                                                    <li><TiTick className='system-list-icons' />Bonus behavioral interview content.</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">MLExpert</h5>
                                                <div>
                                                    <li><TiTick className='system-list-icons' />The best machine learning coding questions.</li>
                                                    <li><TiTick className='system-list-icons' />The best machine learning coding questions.</li>
                                                    <li><TiTick className='system-list-icons' />The best machine learning design questions.</li>
                                                    <li><TiTick className='system-list-icons' />An exhaustive course on machine learning.</li>
                                                    <li><TiTick className='system-list-icons' />A series on large-scale machine learning.</li>
                                                    <li><TiTick className='system-list-icons' />A glossary of machine learning terms.</li>
                                                    <li><TiTick className='system-list-icons' />Comprehensive video explanations.</li>
                                                    <li><TiTick className='system-list-icons' />Unlockable certificate of success.</li>
                                                    <li><TiTick className='system-list-icons' />A timed machine learning quiz.</li>
                                                    <li><TiTick className='system-list-icons' />Bonus behavioral interview content.</li>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">InfraExpert</h5>
                                                <div>
                                                    <li><TiTick className='system-list-icons' />An exhaustive course on infrastructure.</li>
                                                    <li><TiTick className='system-list-icons' />The best infrastructure coding questions.</li>
                                                    <li><TiTick className='system-list-icons' />The best infrastructure design questions.</li>
                                                    <li><TiTick className='system-list-icons' />A glossary of infrastructure terms.</li>
                                                    <li><TiTick className='system-list-icons' />Comprehensive video explanations.</li>
                                                    <li><TiTick className='system-list-icons' />Unlockable certificate of success.</li>
                                                    <li><TiTick className='system-list-icons' />A feature-rich in-browser IDE.</li>
                                                    <li><TiTick className='system-list-icons' />A timed infrastructure quiz.</li>
                                                    <li><TiTick className='system-list-icons' />Bonus behavioral interview content.</li>
                                                    <li><TiTick className='system-list-icons' />A glossary of infrastructure terms.</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">IOSExpert</h5>
                                                <div>
                                                    <li><TiTick className='system-list-icons' />A crash course on programmatic layout.</li>
                                                    <li><TiTick className='system-list-icons' />A crash course on unit testing.</li>
                                                    <li><TiTick className='system-list-icons' />A crash course on concurrency.</li>
                                                    <li><TiTick className='system-list-icons' />Model solutions to a typical coding challenge.</li>
                                                    <li><TiTick className='system-list-icons' />A glossary of iOS terms.</li>
                                                    <li><TiTick className='system-list-icons' />Comprehensive video explanations.</li>
                                                    <li><TiTick className='system-list-icons' />Unlockable certificate of success.</li>
                                                    <li><TiTick className='system-list-icons' />A timed iOS/Swift quiz.</li>
                                                    <li><TiTick className='system-list-icons' />Bonus behavioral interview content.</li>
                                                    <li><TiTick className='system-list-icons' />A crash course on concurrency.</li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                        <Footer />
                    </div>
            }

        </div>
    );
}

export default SystemExpert;
