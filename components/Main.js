import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import Intro from './articles/Intro';
import About from "./articles/About";
import Work from "./articles/Work";
import Contact from "./articles/Contact";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTwitter, faFacebook, faInstagram, faGithub} from '@fortawesome/fontawesome-free-brands';

const Main = (props) => {
  let close = <div className="close" onClick={() => {props.onCloseArticle()}}></div>

  const handleBackgroundClick = () => {
    if (props.isArticleVisible) {
      props.onCloseArticle();
    }
  };

  return (
    <>
      {/* Add a click detection overlay that appears when articles are visible */}
      {props.isArticleVisible && (
        <div 
          className="background-overlay" 
          onClick={handleBackgroundClick}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1, // Lower than article but higher than other content
            cursor: 'pointer'
          }}
        />
      )}

      <div id="main" style={props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <article id="intro" className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} 
                style={{display:'none', position: 'relative', zIndex: 2}}>
          <Intro/>
          {close}
        </article>

        <article id="work" className={`${props.article === 'work' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} 
                style={{display:'none', position: 'relative', zIndex: 2}}>
          <Work/>
          {close}
        </article>

        <article id="about" className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} 
                style={{display:'none', position: 'relative', zIndex: 2}}>
          <About/>
          {close}
        </article>

        <article id="contact" className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`} 
                style={{display:'none', position: 'relative', zIndex: 2}}>
          <Contact/>
          {close}
        </article>
      </div>
    </>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  isArticleVisible: PropTypes.bool
}

export default Main