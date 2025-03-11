import React from "react";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const Work = () => {
    return (
        <>
            <h1 className="major">Projects 💻</h1>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Sentiment Analysis Trading Bot</h3>
            {/* <a href="https://github.com/fruitsalad266" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
            </a> */}
            </div>
            <p>I've always been interested in quantitative finance, so this project allowed me to explore that intersection of CS and business. Initially I trained a model through the 
                <a href="https://pullpush.io/" target="_blank"> PushShift </a>torrents, which let me compare historical market data to sentiment (measured by HuggingFace) on Reddit that day for a particular
                ticker. Eventually, because my model was longer-term (i.e. not updating every second), I switched from a Selenium/BeautifulSoup hybrid collection
                model to the pushpull.io API directly. I've backtested the algorithm (with historical data) and it beat the market by 39% yearly, 
                but I'm aware that a live version won't produce as-stellar results.
            </p> 
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Figma Snowflake Plugin</h3>
                <a href="https://github.com/fruitSalad266/snowflake1" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="1x" />
                </a>
            </div> 
            <span className="image main" style={{marginTop: '10px'}}><Image src="/static/images/snowflakecover.png" height={300} width={500} alt="" /></span>
            <p style={{marginTop: '-25px'}}>I wanted to generate snowflakes for an IFC post, and also had additional winter-themed
                posts in mind for other organizations. I couldn't get the snowflakes to sit right manually, so I looked into the 
                 <a href="https://www.figma.com/developers/api" target="_blank"> Figma API</a> and found that it would be possible to make a snowflake
                 generator plugin. The result was a plugin that used Perlin noise to generate a pattern of snowflakes, customizable by
                 number of objects, size, and spread.
            </p>
            

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Reddit Search Query</h3>
            <a href="https://github.com/fruitSalad266/jstest2" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a style={{ marginLeft: '10px'}}href="https://redditquery.vercel.app" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGlobe} size="1x" />
            </a>
            </div> 
            <p>Used fastAPI, React and python Requests to search reddit for cool stuff</p>

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Diabetes Predictor</h3>
            <a href="https://github.com/fruitSalad266/diabetes1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            </div> 
            <p>My team and I trained three machine learning 
                algorithms, <a href="https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm" 
                target="_blank">k-NN,</a> <a href="https://en.wikipedia.org/wiki/Random_forest" 
                target="_blank">Random Forest</a> and <a href="https://en.wikipedia.org/wiki/Logistic_regression" 
                target="_blank">Logistic Regression</a> to 
                predict whether or not an individual had diabetes based on a variety of biometric factors.
                I also created a web-app for an interactive kNN plot that allows users to adjust the "k" as well as overall
                sample size. </p>
        </>
    )
}

export default Work;