import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import DreamCard from './dreamCard';

const DreamsList = () => {
    const [dreams, setDreams] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        AxiosWithAuth()
            .get('/dreams')
            .then(res => {
                console.log(res.data)
                setDreams(res.data)
            })
            .catch(err => console.log('Cannot retrieve dreams', err))
    }, [])

    return (
        <div className='dreamsList'>
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