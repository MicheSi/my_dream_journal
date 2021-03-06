import React, { useState, useEffect } from 'react';
import { Button, Popup, Form } from 'semantic-ui-react';
import moment from 'moment';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import DreamCard from './dreamCard';

const DreamsList = props => {
    const [dreams, setDreams] = useState([]);
    const [page, setPage] = useState(1)
    const [next, setNext] = useState()

    // getting user id from local storage
    const id = localStorage.getItem('id')

    // this retrieves dreams for the logged in user
    useEffect(() => {

        AxiosWithAuth()
            .get(`/dreams/users/${id}?page=${page}&limit=1`)
            .then(res => {
                console.log(res)
                setDreams(res.data.dreamResults)
                setNext(res.data.next)
            })
            .catch(err => console.log('Cannot retrieve dreams', err))
    }, [page])

    const prevPage = e => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    // go to next dream
    const nextPage = e => {
        if (next) {
            setPage(page + 1)
        }
    }

    return (
        <div className='dreamsList'>
            <h2>My Past Dreams</h2>
            <a className='viewAll' href='/alldreams'>View All Dreams</a>
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
            </div>
            <div className='pagination'>
                <Popup
                 content='View Previous Dream'
                 position='top right'
                 trigger={<Button className='prev' size='big' icon='arrow left' onClick={prevPage}/>}
                />
                <Popup
                 content='View Next Dream'
                 position='top left'
                 trigger={<Button className='prev' size='big' icon='arrow right' onClick={nextPage}/>}
                />
            </div>
        </div>
    )
}

export default DreamsList;