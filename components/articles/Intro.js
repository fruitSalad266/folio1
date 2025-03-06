import React from "react";
import Image from "next/image";

const Intro = () => {
    return (
        <>
            <h1 className="major">About 🙋🏻‍♂️</h1>
            {/* <span className="image main"><Image src="/static/images/matt1.jpg" height={500} width={500} alt="" /></span> */}
            <p>Hi! I'm a third-year student at the University of Washington, Seattle, studying both Informatics (SDE) and Business (Operations Supply Chain). 
                    I also work at <a href="https://www.washington.edu/research/compliance/" target="_blank">UW Research Compliance </a>
                     and am the current Director of PR for <a href="https://uwifc.com" target="blank">UW IFC.</a>
                </p>
            <p>I'm highly experienced in research, data, marketing, full stack software development, database management, 
                ML and AI et cetera. I'm also experienced in DJing. </p>
            <p>The best way to contact me is through my email: <a href="mailto:mattcng9@uw.edu">mattcng9 (at) uw dot edu</a></p>
        </>
    )
}

export default Intro;