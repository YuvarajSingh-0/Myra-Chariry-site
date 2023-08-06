const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <div className="header">
                <h1>Privacy Policy</h1>
                <p className="subheader">Effective Date: { 
                    // new Date().toLocaleDateString('en-US', {
                    //     year: 'numeric',
                    //     month: 'long',
                    //     day: 'numeric'
                    // })
                    'August 7, 2023'
                }</p>
            </div>
            <p>
                At MYRA, we value the privacy and security of our valued donors. This Privacy Policy outlines the information we collect, how it is used, to whom it may be disclosed, and the security practices we follow to safeguard such information. By accessing or using our website, you agree to the terms of this Privacy Policy.
            </p>
            <div className="section">
                <h2>Information Collected:</h2>
                <ul>
                    <li>Contact information: such as name, contact number, and email address.</li>
                    <li>Address information: such as physical mailing address or location.</li>
                    <li>Any other personal information voluntarily provided by the donor.</li>
                </ul>
            </div>
            <div className="section stripe-section">
                <h2>Stripe Payment Gateway:</h2>
                <p>
                    We use Stripe as our payment gateway to securely process donations made by our donors. Stripe is a third-party payment processing service that collects and processes payment information on our behalf. By making a donation through our website, you agree to Stripe's terms of service and privacy policy.
                </p>
                <p>
                    Stripe may collect and store certain information, including but not limited to your name, email address, billing address, and credit/debit card details. This information is used solely for processing your donation and is subject to Stripe's own privacy practices.
                </p>
                <p>
                    We do not have access to your full payment information, such as credit/debit card numbers, as Stripe handles all payment processing securely. We recommend reviewing Stripe's privacy policy to understand how they handle your payment information and ensure your data is protected during the payment process.
                </p>
            </div>
            <div className="section">
                <h2>Purpose of Use:</h2>
                <ul>
                    <li>Internal Use: We use your contact information and address solely for internal purposes. This includes but is not limited to communicating with you regarding updates, upcoming campaigns, announcements, and news related to our products and services.</li>
                    <li>Campaign Updates: Your contact information may be used to keep you informed about the progress and developments of ongoing campaigns you have participated in.</li>
                    <li>Improvements: We may use the information provided to enhance and improve our website, products, and services to better meet the needs of our donors.</li>
                </ul>
            </div>
            <div className="section">
                <h2>Disclosure:</h2>
                <p>
                    We do not share, sell, rent, or trade our donors' personal information with any third parties without their prior consent or request. Your personal information remains confidential and is accessible only by our authorized personnel who require this information to fulfill their duties in relation to our services.
                </p>
            </div>
            <div className="section">
                <h2>Exceptions to Disclosure:</h2>
                <ul>
                    <li>Compliance with Law: We may share your information if required to do so by law or in response to valid legal requests, such as subpoenas or court orders.</li>
                    <li>Protection of Rights: We may disclose information when necessary to protect our rights, privacy, safety, or property, as well as that of our donors and others.</li>
                </ul>
            </div>
            <div className="section">
                <h2>Reasonable Security Practices:</h2>
                <p>
                    We take reasonable precautions to protect the personal information collected from our donors. We employ appropriate physical, electronic, and managerial procedures to safeguard and secure the data against unauthorized access, disclosure, alteration, or destruction. While we strive to use commercially acceptable means to protect your information, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
            </div>
            <div className="section">
                <h2>Updates to Privacy Policy:</h2>
                <p>
                    Any changes or updates to our Privacy Policy will be posted on this website. We encourage our donors to review this page periodically for the latest information on our privacy practices.
                </p>
            </div>
            <div className="section contact-section">
                <h2>Contact Information:</h2>
                <div className="contact-info">
                    <p>
                        <label>MYRA</label>
                    </p>
                    <p>
                        <label>Address:</label> Nellore, Andhra Pradesh
                    </p>
                    <p>
                        <label>Email:</label> yuvarajsingh170@gmail.com
                    </p>
                    <p>
                        <label>Phone:</label> +91 63058 17648
                    </p>
                </div>
                <p>
                    By using our website and providing your information, you consent to the collection, use, and disclosure of your personal information as described in this Privacy Policy.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
