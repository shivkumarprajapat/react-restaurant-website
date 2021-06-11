import React, { useState } from "react";
export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <header>
                <a href="//#region " className="logo">Food<span>.</span></a>
                <div onClick={() => setOpen(!open)} className={open ? "menuToggle active" : "menuToggle"}> </div>
                <ul className={open ? "navigation active" : "navigation"}>
                    <li><a href="#banner" >Home</a></li>
                    <li><a href="#about" >About</a></li>
                    <li><a href="#menu" >Menu</a></li>
                    <li><a href="#expert ">Expert</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact" >Contact</a></li>
                    <li><a href="//#region ">
                        <svg viewBox="0 0 64 48">
                            <path d="M19,15 L45,15 C70,15 58,-2 49.0177126,7 L19,37"></path>
                            <path d="M19,24 L45,24 C61.2371586,24 57,49 41,33 L32,24"></path>
                            <path d="M45,33 L19,33 C-8,33 6,-2 22,14 L45,37"></path>
                        </svg>
                    
                    </a> </li>
                </ul>
            </header>
        </>
    )
}
