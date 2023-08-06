import {Link} from 'react-router-dom';
const Activities = () => {

    return (
        <div className="activities" id='activites-section'>
            <h1 className="activities-h1">Occasions</h1>
            <div className="activities-list">
                
                <div className="activities-list-item">
                    <div >
                        <img src='./mothersday.jpg' alt="activity" className='activity-img' />
                    </div>
                    <div className="activities-list-item-content">
                        <h3>Mother's Day</h3>
                        <p>
                            This Mother's Day, show your mom how much she means to you with a heartfelt gift from MYRA Foundation. Honor her love and sacrifice with a donation that makes a positive impact on the lives of others. Celebrate the woman who has always been there for you, and make this Mother's Day one to cherish forever.
                        </p>
                        <Link to={`/activities/${1}`} className='activities-link-learnmore'>Learn More</Link>
                    </div>
                </div>
                <div className="activities-list-item">
                    <div >
                        <img src='./birthday.jpg' alt="activity" className='activity-img' />
                    </div>
                    <div className="activities-list-item-content">
                        <h3>Birthday</h3>
                        <p>
                            Make your loved one's birthday extra special with a thoughtful gift from MYRA Foundation. Show them how much you care with a gift that brings smiles and joy. Whether it's a surprise donation to their favorite cause or a personalized message of love, your gesture will make their birthday truly unforgettable.
                        </p>
                        <Link to={`/activities/${1}`} className='activities-link-learnmore'>Learn More</Link>
                    </div>
                </div>
                <div className="activities-list-item">
                    <div >
                        <img src='./anniversary1.jpg' alt="activity" className='activity-img' />
                    </div>
                    <div className="activities-list-item-content">
                        <h3>Anniversary</h3>
                        <p>
                            Celebrate the milestones of love and commitment with a heartwarming gift from MYRA Foundation. On your special day, express your love and appreciation with a donation that makes a difference. Honor the journey you've shared together and create lasting memories by gifting a smile to those in need
                        </p>
                        <Link to={`/activities/${1}`} className='activities-link-learnmore'>Learn More</Link>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Activities;