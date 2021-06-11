import React from 'react'

function Services({ data }) {
    return (
        <>
            <section className="menu" id="menu">
                <div className="title">
                    <h2 className="titleText">{data ? data.ttl : "loading"} <span>M</span>enu</h2>
                    <p></p>
                </div>
                <div className="content">
                    {
                        data ? data.serviceBox.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="imgBx">
                                    <img src={item.simg} alt="" />
                                </div>
                                <div className="text">
                                    <h3>{item.ttl}</h3>
                                </div>
                            </div>
                        )) : "loading"
                    }
                </div>

                <div className="title">
                    <a href="#//" className="btn">View All</a>
                </div>
            </section>
        </>
    )
}

export default Services
