import React from 'react';
import NewDream from './newDream';
import DreamsList from './dreamsList';
import { Button } from 'semantic-ui-react';

const Dashboard = props => {
    // code to clear local storage upon user sign out
    const signOut = () => {
        localStorage.clear();
        window.location.href='/'
    }

    return (
        <div className='dashContainer'>
            <h1>My Dashboard</h1>
            <Button className='signoutBtn' size='big' onClick={signOut}>Sign Out</Button>
            <div className='dashboard'>
                <NewDream />
                <DreamsList /> 
            </div>
        </div>
    )
}

export default Dashboard;