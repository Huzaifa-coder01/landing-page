import React from "react";
import './home.css'

const Home = () => {
    return(
        <section id="home">
            <h1>Welcome to our Landing Page</h1>
            <p>Some engaging text here.</p>
            <a href="#contact" className="cta">Get in Touch</a>
        </section>
    )
}

export default Home