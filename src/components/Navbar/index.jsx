import React from 'react'


const Navbar = () => {
    return (
        <div className='navbar red-bg'>
            <h2>Welcome, Yok Tien</h2>
            <div className='row'>
                <p className='active'>Today</p>
                <p>Week</p>
                <p>Month</p>
                <p>3 Month</p>
            </div>
        </div>
    )
}

export default Navbar