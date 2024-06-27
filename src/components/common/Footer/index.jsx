import { Link } from "react-router-dom";

const Footer = ( ) => {
    return(
        <div className="footer flex">
            <Link  className="link fs-11 light-text footer-link">Help</Link>
            <Link  className="link fs-11 light-text footer-link">Status</Link>
            <Link  className="link fs-11 light-text footer-link">About</Link>
            <Link  className="link fs-11 light-text footer-link">Careers</Link>
            <Link  className="link fs-11 light-text footer-link">Blog</Link>
            <Link  className="link fs-11 light-text footer-link">Privacy</Link>
            <Link  className="link fs-11 light-text footer-link">Terms</Link>
            <Link  className="link fs-11 light-text footer-link">Text to speech</Link>
            <Link  className="link fs-11 light-text footer-link">Teams</Link>
        </div>
    )
}
export default Footer;