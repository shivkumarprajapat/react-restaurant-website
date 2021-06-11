import React from 'react'
import { Helmet } from "react-helmet";

function Home({ data }) {
    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Home application" />
            </Helmet>
            <section className="banner" id="banner">
                <div className="content">
                    <h2>{data ? data.title : "loading"}</h2>
                    <p>{data ? data.desc : "loading"}</p>
                    <a href="#//" className="btn">{data ? data.btn : "loading"}</a>
                </div>
            </section>
        </>
    )
}

export default Home
