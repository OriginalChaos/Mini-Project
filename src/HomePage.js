import React from 'react';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="home">
            <main>
                <section className="hero">
                    <h1>Welcome to Varun Engineering</h1>
                    <p><i>Empowering Automation Excellence</i></p>
                </section>

                <section className="mission-statement">
                    <div className="container">
                        <h2>Mission Statement</h2>
                        <p>At Varun Engineering, our mission is to provide innovative automation and instrumentation solutions that empower businesses to optimize their operations, increase efficiency, and drive growth. We are committed to delivering high-quality products, exceptional service, and expert guidance to our clients, helping them achieve automation excellence and stay ahead in today's competitive market.</p>
                    </div>
                </section>

                <section className="testimonials">
                    <div className="container">
                        <h2>Testimonials</h2>
                        <div className="testimonial">
                            <p>"Varun Engineering has been instrumental in transforming our manufacturing processes with their cutting-edge automation solutions. Their team provided expert consultation, tailored solutions, and excellent support throughout the implementation process. Thanks to Varun Engineering, we've seen significant improvements in productivity and efficiency."</p>
                            <p className="author">- Aryan Sehgal, CEO of XYZ Manufacturing</p>
                        </div>
                        <div className="testimonial">
                            <p>"Working with Varun Engineering has been a game-changer for our company. Their wide range of automation products and in-depth industry knowledge have allowed us to streamline our operations and stay ahead of the curve. The team at Varun Engineering is professional, responsive, and truly dedicated to helping their clients succeed."</p>
                            <p className="author">- Rajesh Khanna, Operations Manager at XYZ Technologies</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Varun Engineering. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default HomePage;
