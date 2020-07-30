import React from 'react';
import NewDream from './newDream';
import DreamsList from './dreamsList';
import { Button } from 'semantic-ui-react';

const Dashboard = props => {
    

    return (
        <div className='dashContainer'>
            <Button className='signoutBtn'>Sign Out</Button>
            <div className='dashboard'>
                <h1>My Dashboard</h1>
                <NewDream />
                <DreamsList />
            </div>
        </div>
    )
}

export default Dashboard;