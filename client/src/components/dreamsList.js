import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import moment from 'moment';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import DreamCard from './dreamCard';



const DreamsList = props => {
    const [dreams, setDreams] = useState([]);

    // getting user id from local storage
    const id = localStorage.getItem('id')

    // this retrieves dreams for the logged in user
    useEffect(() => {
        AxiosWithAuth()
            .get(`/dreams/users/${id}?page=1&limit=1`)
            .then(res => {
                console.log(res)
                setDreams(res.data.dreamResults)
            })
            .catch(err => console.log('Cannot retrieve dreams', err))
    }, [])

    return (
        <div className='dreamsList'>
            <h2>My Past Dreams</h2>
            <div className='dreams'>
            {dreams.map(dream => {
                let newDate = moment(dream.date).format('MM/DD/YYYY')
                return(
                    <DreamCard
                     key={dream.id}
                     id={dream.id}
                     date={newDate}
                     description={dream.description}
                    />
                )
                
})}
            {/* <Pagination defaultActivePage={1} totalPages={5} limit={2} /> */}
            </div>
        </div>
    )
}

export default DreamsList;