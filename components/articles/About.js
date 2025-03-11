import React from "react";
import Image from "next/image";
const About = () => {
    return (
        <>
            <h1 className="major">Experience 📝</h1>
            <p>You can access my full resume by <a href="mailto:mattcng9@uw.edu">emailing me</a></p>
            <p style={{marginTop: '-35px'}}><i>This is also the best way to get more information on my current positions</i></p>

            <h2 style={{marginTop: '-15px'}}>Current</h2>
            <h3>UW Research Compliance</h3>
            <h4 style={{marginTop: '-15px'}}>Data Analyst</h4>
            <ul style={{marginTop: '-5px'}}>
                <li>Wrote Python scripts to conduct weekly analyses of team performance datasets, generating updates pushed to a public site</li>
                <li>Grew invoicing output by publishing reports based on data from central SQL DB.</li>
                <li>Utilized Tableau to highlight trends and improve AR team turnaround. </li>
                <li>Automated folder extraction/filewriting, increasing efficiency with Batch scripts</li>
            </ul>

            <span>
            <h3 style={{marginTop: '-15px'}}>UW Interfraternity Council</h3>
            <h4 style={{marginTop: '-15px'}}>Director of Public Relations</h4>
            <ul style={{marginTop: '-5px'}}>
                <li>Represent 2,200+ Greek Men on <a href="https://instagram.com/uwifc" target="_blank">social media</a> and ensure  
                    <a href="https://static1.squarespace.com/static/570ec8a48259b53bf09d3da4/t/57a013d0e3df28965b49a563/1470108625800/Theme%3AAdvertising+Statement.pdf" target="_blank"> policy</a> compliance
                </li>
                <li>Redesigned and maintained <a href="https://uwifc.com" target="_blank">official website</a> to drive recruitment numbers </li>
                <li>Won an <a href="https://aflv.org/award-winners#mms" target="_blank">award</a> for best IFC website</li>
            </ul>
            </span>
            
            <h3 style={{marginTop: '-15px'}}><a href="https://montlakeconsulting.com" target="_blank">Montlake Consulting Group</a></h3>
            <h4 style={{marginTop: '-15px'}}>Consultant</h4>
            <ul><li style={{marginTop: '-5px'}}>Use data to gain insights on niche markets for clients</li></ul>

            <h3 style={{marginTop: '-15px'}}>Pi Kappa Alpha Fraternity</h3>
            <h4 style={{marginTop: '-15px'}}>Head of Public Relations</h4>
            <li style={{marginTop: '-5px'}}>Represent the fraternity <a href="https://instagram.com/uwpike" target="_blank">online</a></li>
            
            <hr style={{marginTop: '15px'}}></hr>
            <h2 style={{marginTop: '-15px'}}>Former</h2>

            <h3>Husky Taekwondo</h3>
            <h4 style={{marginTop: '-15px'}}>Head of Social Media</h4>
            <ul>
                <li>Grew <a href="https://instagram.com/uwhuskytkd" target="_blank">Instagram</a> following from 600 to 900+ in 3 months of tenure</li>
                <li>Directed, edited and shot a <a href="https://www.instagram.com/p/DAlSOZXg5o_/" target="_blank">recruitment video</a> reaching over 10k accounts and increasing club sign-ups by 80%</li>
            </ul>
            
        </>
    )
}

export default About;