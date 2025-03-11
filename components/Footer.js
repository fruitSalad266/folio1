import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Matthew Nguyen | Built with: <a href="https://github.com/zeit/next.js">Next.js</a> | Source repo: <a href="https://github.com/fruitSalad266/folio1" target="_blank"> GitHub</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
