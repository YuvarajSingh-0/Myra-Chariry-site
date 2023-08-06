import { Link } from 'react-router-dom';
const Home = () => {

    

    return (
        <div className='home'>
            <div className='navbar'>
                <h3 className='nav-h3'>MYRA</h3>
                <div className='nav-links'>

                    <Link to='#' onClick={()=> {
                        const element = document.getElementById("activites-section");
                        element.scrollIntoView();
                    }} className='nav-link'>Explore</Link>
                    <Link to='/privacy-policy' className='nav-link'>Privacy Policy</Link>
                    <Link to='#' className='nav-link'>Partners</Link>

                    <button className='nav-btn' onClick={() => {
                        const element = document.getElementById("donate-section");
                        element.scrollIntoView();
                    }}>Donate</button>

                </div>
            </div>
            <div className="home-content">
                <div className="left">
                    <h3 className="left-h3">About</h3>
                    <h1 className="left-h1 gradient-txt">MYRA</h1>
                    <p className="left-p">
                        MYRA foundation has been created so that you can express ur love to ur loved ones by gifting someone's smile even with ur little contribution.
                        <br />
                        <br />
                        No matter how you choose to "gift a smile" to your loved ones, you can be sure that your contribution will make a difference. Your loved ones will be grateful for your thoughtfulness, and the people you help will be forever grateful for your kindness.</p>
                    {/* <ul className="left-ul">
                        <li className="left-li"><img alt='checkmark' src='./check.png' className='check-img' />Funds go firectly to charity  </li>
                        <li className="left-li"><img alt='checkmark' src='./check.png' className='check-img' />Funds go firectly to charity  </li>
                        <li className="left-li"><img alt='checkmark' src='./check.png' className='check-img' />Funds go firectly to charity  </li>
                    </ul> */}
                </div>
                <div className="right">
                    <img src="./logo.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Home;