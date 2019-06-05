import React from 'react'
import calenderImg from '../../../images/schedule.png';

const ScheduleCard = () => {
    return ( 
        <div className='card row col-2 top-card'>
            <img width='40px' height='40px' src={calenderImg} alt="calenderimg"/>
            <div>
                <h3>Schedule</h3>
                <div className='number'>3</div>
                <span>Appointment</span>
            </div>
        </div>
     );
}
 
export default ScheduleCard;