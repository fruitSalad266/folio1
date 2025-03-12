import React from "react";
import Image from "next/image";

const Intro = () => {
    return (
        <>
            <h1 className="major">About 🙋🏻‍♂️</h1>
            {/* <span className="image main"><Image src="/static/images/matt1.jpg" height={500} width={500} alt="" /></span> */}
            <p>Hi! I'm a third-year student at the University of Washington, Seattle, studying both Informatics (Software) and Business (Operations Supply Chain). 
                    I also work at <a href="https://www.washington.edu/research/compliance/" target="_blank">UW Research Compliance </a>
                     as a data analyst and am the current Director of PR for <a href="https://uwifc.com" target="blank">UW IFC.</a>
                </p>
            <p>I'm highly experienced in research, data, marketing, full stack software development, database management, 
                ML and AI et cetera. I'm also experienced in DJing. </p>
            <p>The best way to contact me is through my email: <a href="mailto:mattcng9@uw.edu">mattcng9 (at) uw dot edu</a></p>
            
            <hr style={{marginTop: '-15px'}}></hr>

            <h3 style={{marginTop: '-15px'}}>Fast Facts</h3>
            <ul>
                <li><b>Computer Languages:</b> Python, Java, JavaScript, C++, Bash, TypeScript, HTML, SQL, R, JSX, SCSS, LaTeX, Markdown</li>
                <li><b>Human Languages:</b> English, Vietnamese, Mandarin Chinese, Spanish</li>
                <li><b>Tools:</b> Git, Pandas, Seaborn, plotly, scikit-learn, React, FastAPI, Next.JS, Node.JS, PyTorch, Jupyter, 
                        Agile framework, QuantConnect, MySQL, SQLite</li>
                <li><b>Software: </b><a href="https://www.blackmagicdesign.com/products/davinciresolve" target="_blank"> Davinci Resolve</a>
                    , Figma, Canva, Adobe Photoshop, Tableau, Excel, Microsoft Office Suite</li>
                <li><b>Interests:</b> Data science, fullstack development, statistics, quantitative 
                finance. <a href="https://en.wikipedia.org/wiki/Illenium" target="_blank">EDM</a>, College Football, weightlifting, game theory.
                </li>
                <li><b>SAT:</b> 1590</li>
            </ul>
            <p>I am open to learning any other (computer or otherwise) languages requested.</p>
            <p>Courses I've taken at UW include Data Structures and Algorithms, Operations Management, Artificial Intelligence,
                Product Design, Product Management, Data & Database Modeling, and Information Systems.
            </p>

        </>
    )
}

export default Intro;