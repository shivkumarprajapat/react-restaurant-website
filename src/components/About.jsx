import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About({ data }) {
    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);

    return (
        <>
            <section className="about" id="about">
                <div className="row">
                    <div className="col50" data-aos={"fade-down-right"}>
                        <h2 className="titleText"><span>{data ? data.til : "loading"}</span>{data ? data.title : "loading"}</h2>
                        <p><br /> {data ? data.desc : "loading"} </p>
                    </div>
                    <div className="col50" data-aos={"fade-down-left"}>
                        <div className="imgBx">
                            <img src={data ? data.image : "loading"} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
