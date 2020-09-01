import React, { useState, useEffect } from 'react';
import { Pagination } from 'semantic-ui-react';
import moment from 'moment';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import DreamCard from './dreamCard';



const DreamsList = props => {
    const [dreams, setDreams] = useState([]);
    const [page, setPage] = useState(1)

    // getting user id from local storage
    const id = localStorage.getItem('id')

    // this retrieves dreams for the logged in user
    useEffect(() => {
        AxiosWithAuth()
            .get(`/dreams/users/${id}?page=${page}&limit=1`)
            .then(res => {
                console.log(res)
                setDreams(res.data.dreamResults)
            })
            .catch(err => console.log('Cannot retrieve dreams', err))
    }, [])

    const onChange = (e, pageInfo) => {
        setPage(pageInfo.page)
    }

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
            <Pagination
             ellipsisItem={null}
             activePage={page}
             onChange={onChange}
             totalPages={10}
            />
            </div>
        </div>
    )
}

export default DreamsList;