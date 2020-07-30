import React from 'react';
import NewDream from './newDream';
import DreamsList from './dreamsList';
import { Button } from 'semantic-ui-react';

const Dashboard = props => {
    const signOut = () => {
        localStorage.clear();
        window.location.href='/'
    }

    return (
        <div className='dashContainer'>
            <Button className='signoutBtn' onClick={signOut}>Sign Out</Button>
            <div className='dashboard'>
                <h1>My Dashboard</h1>
                <NewDream />
                <DreamsList />
            </div>
        </div>
    )
}

export default Dashboard;