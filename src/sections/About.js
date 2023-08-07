const About = () => {
    return (
        <div className="about" id="donate-section">
            <div className="about-content">
                <h1 className="about-h1"> <span className="gradient-txt">HOW IT WORKS</span></h1>
                <div className="about-content-flex">
                    <div className="left">
                        <h2 className="about-h2">Donate</h2>
                        <p className="about-p">
                            MYRA Foundation offers thoughtful gifts to make special occasions meaningful. Choose a gift that fits your budget and give the gift of happiness.
                        </p>
                        <ul>
                            <li> <img alt='' src={'./one.png'} className="check-img" /> Choose an option that fits your budget or contribution capacity.</li>
                            <li> <img alt='' src={'./two.png'} className="check-img" /> Select a payment option and pay the required amount.</li>
                            <li> <img alt='' src={'./three.png'} className="check-img" /> We will contact you via WhatsApp or Email (as per your preference) as soon as we receive your payment.</li>
                            <li> <img alt='' src={'./four.png'} className="check-img" /> We will keep you updated regularly.</li>
                            <li> <img alt='' src={'./five.png'} className="check-img" /> The day before your loved one's special day, we will send you the video and photos via WhatsApp or Instagram DM.</li>
                        </ul>
                    </div>
                    <div className="right">
                        <img src="./pic.png" alt='how it works' className="about-img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;
