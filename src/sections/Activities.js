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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <Link to={`/activities/${1}`} className='activities-link-learnmore'>Learn More</Link>
                    </div>
                </div>
                
                
            </div>
        </div>
    );
}

export default Activities;