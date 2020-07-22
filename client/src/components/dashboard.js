import React from 'react';
import NewDream from './newDream';
import DreamsList from './dreamsList';

const Dashboard = props => {
    return (
        <div className='dashboard'>
            <h1>Welcome {props.username}</h1>
            <NewDream />
            <DreamsList />
        </div>
    )
}

export default Dashboard;