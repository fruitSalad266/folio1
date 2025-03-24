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
            {/* <span className="image main" style={{marginTop: '10px'}}><Image src="/static/images/snowflakecover.png" height={300} width={500} alt="" /></span> */}
            <p style={{marginTop: '-0px'}}>I wanted to generate snowflakes for an IFC post, and also had additional winter-themed
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
            <p>Used fastAPI and python Requests to pull the top 100 reddit posts with a specified keyword. I implemented a 
                responsive frontend with React and deployed with Next.JS and Vercel to ensure maximum stability and uptime
                for the live website.
            </p>

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
            
            <hr style={{marginTop: '-15px'}}></hr>

            <h2 style={{ marginTop: '-15px', marginBottom: '0' }}>Academic Projects</h2>

            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Pac-Man ML</h3>
            <p> Designed + implemented ML concepts in the context of a Pac-Man game:</p>
            <ul style={{marginTop: '-15px'}}>
                <li>Search algorithms like BFS, DFS, cost function and A* search</li>
                <li>Minimax, expectimax, reflex, and alpha-beta pruning agents</li>
                <li>Value iteration, policies, Q-learning and Epsilon-greedy approaches</li>
                <li>Perceptron classification and feature design</li>
            </ul>

            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Food Insecurity: Project Sigma</h3>
            <p>A personal interest of mine has been food insecurity and its effects on the homelessness cycle.
                My team and I designed and implemented a MySQL database that contained information on clients, dietary needs,
                nearby resources that provided those foods and their prices, and the nutritional information of those foods. We also created useful functions
                to aggregate commonly accessed data and help nutritionists best meet their clients' needs.
            </p>
            <p style={{marginTop: '-15px'}}>We prepared a full schema and presentation alongside our actual server-side SQL code.</p>

            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>NutriDash</h3>
            <p>Stemming out of the general food desert problem, NutriDash was aimed at creating an accessible app for elderly users who 
                may not have the resources to accurately inform their unique food needs. After tedious research to accurately determine
                user needs and goals, we prototyped our fully interactive app in Figma and prepared an accompanying presentation.
            </p>

            <h3 style={{ marginRight: '10px', marginBottom: '0' }}>Registration System Redesign</h3>
            <p>Given a scenario, my team and I used the <a href="https://en.wikipedia.org/wiki/Agile_software_development" target="_blank">Agile Methodology</a> to 
            fully lay out the development process behind redesigning a university's <a href="https://en.wikipedia.org/wiki/Irony" target="_blank">outdated registration system.</a> We: 
            <ul style={{marginTop: '5px'}}>
                <li>Identified stakeholder (Role and User) needs</li>
                <li>Wrote comprehensive user stories, functions and epics</li>
                <li>Created architecture requirements based on needs and current standards</li>
                <li>Determined objectives and key results and identified the risks and assumptions we made</li>
                <li>Designed UI, Dataflow and workflow diagrams</li>
                </ul>
            </p>

        </>
    )
}

export default Work;