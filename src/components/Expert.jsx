import React from 'react'

export default function Expert({ data }) {
    return (
        <>
            <section className="expert" id="expert">
                <div className="title">
                    <h2 className="titleText">{data ? data.ttl : "loading"}<span>E</span>xpert</h2>
                    <p>{data ? data.desc : "loading"}</p>
                </div>
                <div className="content">
                    {
                        data ? data.ExpertBox.map((item, index) => (
                            <div className="box" key={index}>
                                <div className="imgBx">
                                    <img src={item.simg} alt="" />
                                </div>
                                <div className="text">
                                    <h3>{item.ttl}</h3>
                                </div>
                            </div>
                        )) : "loading   "
                    }
                </div>
            </section>
        </>
    )
}
