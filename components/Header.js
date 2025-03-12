import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import mainIcon from '@fortawesome/fontawesome-free-regular/faLifeRing'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Header = (props) => (

    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/* <FontAwesomeIcon icon={mainIcon} transform="grow-63" className="hover-flip-icon"/> */}
            <FontAwesomeIcon 
                icon={mainIcon} 
                transform="grow-63"
                style={{
                    transition: 'transform 0.8s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scaleX(-1)'}
                onMouseOut={(e) => e.currentTarget.style.transform = ''}
            />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Matthew Nguyen</h1>
                <p>Informatics + Business at the <a href="https://uw.edu">University of Washington, Seattle</a></p>
                <div className="social-icons" style={{marginTop: '-15px', marginBottom: '-15px'}}>
                    <a href="https://www.linkedin.com/in/mattcng" target="_blank" rel="noopener noreferrer" style={{marginRight: '15px'}}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" bounce style={{ animationDuration: '1.5s', animationDelay: '0.5s'}} />
                    </a>
                    <a href="https://github.com/fruitsalad266" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} size="2x" bounce style={{ animationDuration: '1.5s'}}/>
                    </a>
                </div>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>ExperienceOld</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Experience</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
