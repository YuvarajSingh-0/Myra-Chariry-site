import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-title">
                    <h2 className="footer-h2">Charity</h2>
                    <p style={{ fontSize: 'small' }}>If you choose to volunteer your time, you will be able to work directly with children in need. Volunteering is a great way to give back to the community and make a difference in the lives of people in need.</p>
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
                        <li>YouTube</li>
                    </ul>
                </div>
                <div className="contact">
                    {/* <p className="contact-title">Head Office</p>
                    <ul>
                        <li>+91 63058 17648</li>
                        <li>
                            <a href="mailto:yuvarajsingh170@gmail.com">yuvarajsingh170@gmail.com</a>
                        </li>
                        <li>Nellore, Andhra Pradesh</li>
                    </ul> */}
                    {/* <p className="contact-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                    <div>
                        <p className="newsletter">Newsletter</p>
                        <input placeholder="Enter your Email" type="text" name='email'></input>
                    </div>
                </div>
                {/* <div className="contact">
                    <p>Contact</p>
                    <ul>
                        <li>+91 63058 17648</li>
                        <li>
                            <a href="mailto:yuvarajsingh170@gmail.com">yuvarajsingh170@gmail.com</a>
                        </li>
                        <li>Nellore, Andhra Pradesh</li>
                    </ul>
                    <p>dnasf.aksl</p>
                    <div>
                        <p className="newsletter">Newsletter</p>
                        <input placeholder="Enter your Email" type="text" name='email'></input>
                    </div>
                </div> */}
            </div>

        </div>
    )
}
export default Footer;