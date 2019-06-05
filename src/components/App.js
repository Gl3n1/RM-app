import React from 'react';
import './App.scss';

import Navbar from './Navbar';
import ScheduleCard from './Cards/ScheduleCard/index.jsx';
import BirthdayCard from './Cards/BirthdayCard/index.jsx';
import FollowUpCard from './Cards/FollowUpCard/index.jsx';
import TopNewsCard from './Cards/TopNewsCard/index.jsx';

import hsbcimg from '../images/s3-news.jpg'
import hsbcimg2 from '../images/0.jpeg'

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
            link='https://www.thedrum.com/news/2019/05/31/hsbc-champions-internationalism-football-full-english-final-ad'
            title='Tara Latini likes this'
            date='31 May 2019'
            desc='HSBC UK has championed internationalism in football to celebrate the first all English Champions League and Europa League finals.'
            hasImage='false'
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
      </section>
      <section>
        <h2 className='title'>Professional</h2>
      </section>
    </div>
  );
}

export default App;
