import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='home'>
            <div className='navbar'>
                <h3 className='nav-h3'>MYRA</h3>
                <div className='nav-links'>

                    <Link to='/' className='nav-link'>Explore</Link>
                    <Link to='/hh' className='nav-link'>Solutions</Link>
                    <Link to='/as' className='nav-link'>Activities</Link>
                    <Link to='/asd' className='nav-link'>Partners</Link>

                    <button className='nav-btn' onClick={()=> {
                        const element = document.getElementById("donate-section");
                        element.scrollIntoView();
                    }}>Donate</button>

                </div>
            </div>
            <div className="home-content">
                <div className="left">
                    <h3 className="left-h3">Empower Children Through</h3>
                    <h1 className="left-h1 gradient-txt">Education</h1>
                    <p className="left-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <ul className="left-ul">
                        <li className="left-li"><img alt='checkmark' src='./check.png' className='check-img' />Funds go firectly to charity  </li>
                        <li className="left-li"><img alt='checkmark' src='./check.png' className='check-img' />Funds go firectly to charity  </li>
                        <li className="left-li"><img alt='checkmark' src='./check.png' className='check-img' />Funds go firectly to charity  </li>
                    </ul>
                </div>
                <div className="right">
                    <img src="./logo.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Home;