import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import DreamCard from './dreamCard';

const DreamsList = props => {
    const [dreams, setDreams] = useState([]);

    const id = localStorage.getItem('id')

    useEffect(() => {
        console.log(id)
        AxiosWithAuth()
            .get(`users/${id}/dreams`)
            .then(res => {
                setDreams(res.data)
            })
            .catch(err => console.log('Cannot retrieve dreams', err))
    }, [])

    return (
        <div className='dreamsList'>
            <h2>My Dreams</h2>
            {dreams.map(dream => (
                <DreamCard
                 key={dream.id}
                 date={dream.date}
                 description={dream.description}
                 user_id={dream.user_id}
                 username={dream.username}
                />
            ))}
        </div>
    )
}

export default DreamsList;