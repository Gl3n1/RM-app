import React from 'react';
import './App.scss';

import Navbar from './Navbar';
import ScheduleCard from './Cards/ScheduleCard/index.jsx';
import BirthdayCard from './Cards/BirthdayCard/index.jsx';
import FollowUpCard from './Cards/FollowUpCard/index.jsx';
import TopNewsCard from './Cards/TopNewsCard/index.jsx';
import ShowMoreCard from './Cards/ShowMoreCard/index.jsx';
import BottomNavbar from './BottomNavbar';
import ProfessionalCard from './Cards/ProfessionalCard/index.jsx';
import EmptySpace from './Empty'

import hsbcimg from '../images/s3-news.jpg';
import hsbcimg2 from '../images/0.jpeg';
import property from '../images/property.jpg';
import mily from '../images/g.jpeg';
import milyimg from '../images/mily1.png';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section>
        <div className='row'>
          <ScheduleCard />
          <BirthdayCard />
        </div>
        <div className='row'>
          <FollowUpCard />
        </div>
      </section>
      <section>
        <h2 className='title'>Top News</h2>
          <TopNewsCard 
            link='https://www.thestar.com.my/business/business-news/2019/05/08/malaysians-spend-more-time-looking-at-properties-than-going-to-the-gym-or-reading/'
            title='Malaysians spend more time looking at properties...'
            date='Wednesday, 8 May 2019'
            desc='...watching the news,” said country head for retail banking and wealth management Tara Latini.'
            img={property}
          />
          <TopNewsCard 
            link='https://www.thedrum.com/news/2019/05/31/hsbc-champions-internationalism-football-full-english-final-ad'
            title='Tara Latini likes this'
            date='31 May 2019'
            desc='HSBC UK has championed internationalism in football to celebrate the first all English Champions League and Europa League finals.'
            img={hsbcimg}
          />
          <TopNewsCard 
            link='https://www.linkedin.com/company/tun-razak-exchange/'
            title='Tara Latini likes this'
            date='5d'
            desc='As you traverse the city, you may not always notice the multi-faceted shapes of the KL metropolis.'
            img={hsbcimg2}
          />
          <ShowMoreCard />
      </section>
      <section>
        <h2 className='title'>Professional</h2>
        <ProfessionalCard 
          name='Mily Liang'
          position='Head of Customer Value Management at HSBC Retail Banking and Wealth Management'
          postTime='1mo'
          desc='If you are passionate about leading change to our teams and customers, check out this great opportunity at HSBC Malaysia.'
          profileImg={mily}
          img={milyimg}
          imgDesc='We are currently seeking for a subject matter expert in change delivery to lead...'
          link='https://www.linkedin.com/feed/update/activity:6527024284886503424/'
        />
      </section>
      <BottomNavbar />
    </div>
  );
}

export default App;
