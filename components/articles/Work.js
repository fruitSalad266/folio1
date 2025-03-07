import React from "react";
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
            <p>Narrowly beat the S&P by -3.2%</p>

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Figma Snowflake Plugin</h3>
            <a href="https://github.com/fruitSalad266/snowflake1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>

            </div> 
            <p>Made pretty snowflakes in figma</p>

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Reddit Search Query</h3>
            <a href="https://github.com/fruitSalad266/jstest2" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            <a style={{ marginLeft: '10px'}}href="https://redditquery.vercel.app" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGlobe} size="1x" />
            </a>
            </div> 
            <p>Used react.js to search reddit for cool stuff</p>

            <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Diabetes Predictor</h3>
            <a href="https://github.com/fruitSalad266/diabetes1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="1x" />
            </a>
            </div> 
            <p>Predicted diabetes and cured cancer</p>
        </>
    )
}

export default Work;