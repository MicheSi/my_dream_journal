import React, { useState, useEffect } from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import moment from 'moment';
import DreamCard from './dreamCard';
import MenuBar from './menu';
import Footer from './footer';
import { Button, Popup, Form } from 'semantic-ui-react';


const AllDreams = props => {
    const [dreams, setDreams] = useState([]);
    const [page, setPage] = useState(1)
    const [next, setNext] = useState()
    const [limit, setLimit] = useState(4)

    // getting user id from local storage
    const id = localStorage.getItem('id')

    // this retrieves dreams for the logged in user
    useEffect(() => {
        AxiosWithAuth()
            .get(`/dreams/users/${id}?page=${page}&limit=${limit}`)
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

    const changeView = e => {
        console.log(e.target.name, e.target.value)
        setLimit({
            ...limit,
            [e.target.name]: e.target.value
        })
        AxiosWithAuth()
            .get(`/dreams/users/${id}?page=${page}&limit=${e.target.value}`)
            .then(res => {
                console.log(res)
                setDreams(res.data.dreamResults)
                setNext(res.data.next)
            })
            .catch(err => console.log('Cannot retrieve dreams', err))
    }

    return (
        <div className='dashContainer allDreamsList'>
            <header className='dashHeader'>
                <MenuBar/>
                <h1 className='myDashboard'>My Dreams</h1>
                <a className='returnToDash' href='/dashboard'>Return to Dashboard</a>
            </header>
            <div className='changeView'>
                <p className='view'>View</p>
                <Form className='changeForm' onChange={changeView}>
                    <select name='dreamDisplay'>
                        <option name='dreamDisplay' value='4'>4</option>
                        <option name='dreamDisplay' value='8'>8</option>
                        <option name='dreamDisplay' value='12'>12</option>
                        <option name='dreamDisplay' value='16'>16</option>
                    </select>
                </Form>
                <p className='dreamsPerPage'>Dreams per Page</p>
            </div>
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
            <div className='pagination allDreamsPagination'>
                <Popup
                 content='View Previous Page'
                 position='top right'
                 trigger={<Button className='prev' size='big' icon='arrow left' onClick={prevPage}/>}
                />
                <Popup
                 content='View Next Page'
                 position='top left'
                 trigger={<Button className='prev' size='big' icon='arrow right' onClick={nextPage}/>}
                />
            </div>
            <Footer />
        </div>

    )
}

export default AllDreams;