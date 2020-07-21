import React from 'react';
import Nav from './nav';
import NewDream from './newDream';

const Dashboard = () => {
    return (
        <div className='dashboard'>
            <h1>This is your Dream Journal</h1>
            <NewDream />
        </div>
    )
}

export default Dashboard;