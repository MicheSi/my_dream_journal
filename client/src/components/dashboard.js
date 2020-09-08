import React from 'react';
import NewDream from './newDream';
import DreamsList from './dreamsList';
import { Button } from 'semantic-ui-react';
import MenuBar from './menu';

const Dashboard = props => {
    const [loading, setLoading] = useState(false)

    // code to clear local storage upon user sign out
    const signOut = () => {
        localStorage.clear();
        window.location.href='/'
    }

    return (
        <div className='dashContainer'>
            <header className='dashHeader'>
                <MenuBar/>
                <h1 className='myDashboard'>My Dashboard</h1>
                <Button className='signoutBtn' size='big' onClick={signOut}>Sign Out</Button>
            </header>
            <div className='dashboard'>
                <NewDream />
                <DreamsList /> 
            </div>
        </div>
    )
}

export default Dashboard;