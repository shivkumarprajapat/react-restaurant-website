import React from 'react'

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="title">
                <h2 className="titleText"><span>C</span>ontact Us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, sequi.</p>
            </div>
            <div className="contactForm">
                <h3>Send Message</h3>
                <div className="inputBox">
                    <input type="text" placeholder="Nmae" />
                </div>

                <div className="inputBox">
                    <input type="text" placeholder="Email" />
                </div>

                <div className="inputBox">
                    <textarea placeholder="Name"></textarea>
                </div>

                <div className="inputBox">
                    <input type="Submit" placeholder="Send" />
                </div>

            </div>
        </section>
    )
}
