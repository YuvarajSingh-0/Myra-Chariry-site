import {Link} from 'react-router-dom';
const Activities = () => {

    return (
        <div className="activities">
            <h1 className="activities-h1">Activities</h1>
            <div className="activities-list">
                
                <div className="activities-list-item">
                    <div >
                        <img src='./activity.png' alt="activity" className='activity-img' />
                    </div>
                    <div className="activities-list-item-content">
                        <h3>CHARITY</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <Link to={`/activities/${1}`} className='activities-link-learnmore'>Learn More</Link>
                    </div>
                </div>
                <div className="activities-list-item">
                    <div >
                        <img src='./activity.png' alt="activity" className='activity-img' />
                    </div>
                    <div className="activities-list-item-content">
                        <h3>CHARITY</h3>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                        <Link to={`/activities/${1}`} className='activities-link-learnmore'>Learn More</Link>
                    </div>
                </div>
                <div className="activities-list-item">
                    <div >
                        <img src='./activity.png' alt="activity" className='activity-img' />
                    </div>
                    <div className="activities-list-item-content">
                        <h3>CHARITY</h3>
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