import React from 'react';
import NewDream from './newDream';
import DreamsList from './dreamsList';
import { Button } from 'semantic-ui-react';
import Footer from './footer';

const Dashboard = props => {
    // code to clear local storage upon user sign out
    const signOut = () => {
        localStorage.clear();
        window.location.href='/'
    }

    return (
        <div className='dashContainer'>
            <header className='dashHeader'>
                <div className='spacer'></div>
                <h1 className='myDashboard'>My Dashboard</h1>
                <Button className='signoutBtn' size='big' onClick={signOut}>Sign Out</Button>
            </header>
            <div className='dashboard'>
                <NewDream />
                <DreamsList /> 
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;