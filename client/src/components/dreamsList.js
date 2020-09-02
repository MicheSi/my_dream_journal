import React, { useState, useEffect } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
// import { Pagination } from 'semantic-ui-react';
import {Button} from 'semantic-ui-react';
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
    }, [page])

    const prevPage = e => {
        if (page > 1) {
            setPage(page - 1)
        }
    }

    const nextPage = e => {
        setPage(page + 1)
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
            </div>
            <div className='pagination'>
            <Button className='prev' size='big' icon='arrow left' onClick={prevPage}></Button>
            <Button className='prev' size='big' icon='arrow right' onClick={nextPage}></Button>
            {/* <Pagination size='lg' aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink onClick={prevPage} previous href=""/>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink onClick={nextPage} next href="" />
                </PaginationItem>
            </Pagination> */}
            </div>
        </div>
    )
}

export default DreamsList;