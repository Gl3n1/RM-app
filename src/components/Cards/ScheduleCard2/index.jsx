import React from 'react'

const ScheduleCard2 = (props) => {
    return ( 
        <div className='card row schedulecard card-image'>
            <img src={props.img} alt="hsbc"/>
            <div className='content'>
                <p className='desc'>{props.desc}</p>
                <p className='time'>{props.time}</p>
                <p className='location'>{props.location}</p>
            </div>
        </div>
     );
}
 
export default ScheduleCard2;