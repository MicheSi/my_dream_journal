import React from 'react';
import NewDream from './newDream';

const Dashboard = props => {
    return (
        <div className='dashboard'>
            <h1>Welcome {props.username}</h1>
            <NewDream />
        </div>
    )
}

export default Dashboard;