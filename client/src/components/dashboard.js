import React from 'react';
import NewDream from './newDream';
import DreamsList from './dreamsList';

const Dashboard = props => {
    

    return (
        <div className='dashboard'>
            <h1>My Dashboard</h1>
            <NewDream />
            <DreamsList />
        </div>
    )
}

export default Dashboard;