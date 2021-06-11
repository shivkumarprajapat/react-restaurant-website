import React from 'react'

function Testimonials({ data }) {
    return (
        <>
            <section className="testimonials" id="testimonials">
                <div className="title white">
                    <h2 className="titleText">{data ? data.ttl : "loading"} <span>S</span>aid About Us</h2>
                    <p></p>
                </div>
                <div className="content">
                    {
                        data ? data.TestimoBox.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="imgBx">
                                    <img src={item.simg} alt="" />
                                </div>
                                <div className="text">
                                    <p>{item.desc} </p>
                                    <h3>{item.ttl} </h3>
                                </div>
                            </div>
                        )) : "loading"
                    }

                </div>
            </section>
        </>
    )
}

export default Testimonials
