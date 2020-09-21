import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import moment from 'moment';
import DreamCard from './dreamCard';


const AllDreams = props => {
    const [dreams, setDreams] = useState([]);
    const [page, setPage] = useState(1)
    const [next, setNext] = useState()

    // getting user id from local storage
    const id = localStorage.getItem('id')

    // this retrieves dreams for the logged in user
    useEffect(() => {
        AxiosWithAuth()
            .get(`/dreams/users/${id}?page=${page}&limit=10`)
            .then(res => {
                console.log(res)
                setDreams(res.data.dreamResults)
                setNext(res.data.next)
            })
            .catch(err => console.log('Cannot retrieve dreams', err))
    }, [page])

    // go to previous page
    const prevPage = e => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    // go to next page
    const nextPage = e => {
        if (next) {
            setPage(page + 1)
        }
    }

    return (
        <div className='allDreamsList'>
            <h2>My Dreams</h2>
            <div className='allDreams'>
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
            </div>
        </div>

    )
}

export default AllDreams;