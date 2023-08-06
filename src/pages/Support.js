import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Support = () => {
    return (
        <div className="support">
            <h1>Support MYRA Foundation</h1>
            <p>
                Thank you for considering supporting MYRA Foundation. Your generosity will help us make a difference in the lives of those in need. By making a donation, you contribute to our mission of spreading smiles and making the world a better place for everyone.
            </p>

            <div className="support-info">
                <h2>Contact Support:</h2>
                <p>If you have any questions or need assistance, feel free to contact our dedicated support team:</p>
                <p>Email: support@myrafoundation.com</p>
                <p>Phone: +1 (123) 456-7890</p>
            </div>

            <div className="donation-info">
                <h2>Make a Donation:</h2>
                <p>If you would like to support our cause and make a meaningful impact, you can do so through our secure donation page:</p>
                {/* Use Link to redirect to the landing page */}
                <Link to="/" className="donate-button">Donate Now</Link>
            </div>
        </div>
    );
};

export default Support;
