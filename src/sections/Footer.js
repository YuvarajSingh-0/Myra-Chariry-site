import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-title">
                    <h2 className="footer-h2">Charity</h2>
                    <p style={{ fontSize: 'small' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                </div>
                <div className="sitemap">
                    <p>Sitemap</p>
                    <ul>
                        <li><Link onClick={() => {
                            window.scrollTo(0, 0);
                        }} to='/'>Home</Link></li>
                        <li><Link onClick={() => {
                            const element = document.getElementById('activites-section');
                            element.scrollIntoView();
                        }} to='/'>Donate</Link></li>
                        <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="socials">
                    <p>Socials</p>
                    <ul>
                        <li>Facebook</li>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>
                </div>
                <div className="contact">
                    <p className="contact-title">Head Office</p>
                    <p className="contact-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div>
                        <p className="newsletter">Newsletter</p>
                        <input placeholder="Enter your Email" type="text" name='email'></input>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer;