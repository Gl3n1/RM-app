import React from 'react';
import Navbar from '../Navbar';
import ProfileCard from '../Cards/ProfileCard/index.jsx';
import NotesApp from '../NotesApp'

const ProfilePage = props => {
    return ( 
        <div>
            <Navbar page='profile' />
            <section>
                <ProfileCard 
                    img={props.location.state.img}
                    name={props.location.state.name}
                    desc='Fusce et quam non augue mattis ullamcorper.'
                    date='15th March 2019'
                    products={['Current account','Credit card','Loan']}
                />
                <h2 className='title profile-title'>Notes</h2>
                <NotesApp 
                    name={props.location.state.name}
                />
            </section>
        </div>
     );
}
 
export default ProfilePage;