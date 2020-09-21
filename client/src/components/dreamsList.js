import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, Popup } from 'semantic-ui-react';
import moment from 'moment';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import DreamCard from './dreamCard';
import { fetchDreams } from '../actions/dreamActions';

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

    // const {fetchDreams} = props

    // useEffect(() => {
    //     fetchDreams()
    // }, [fetchDreams])

    // go to previous dream
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

    const sortDreams = e => {
        console.log(e.target.value)
        if (e.target.value === 'asc') {
            setDreams(dreams.reverse())
            window.location.reload()
        }
    }

    return (
        <div className='dreamsList'>
            <h2>My Past Dreams</h2>
            <a className='viewAll' href='/alldreams'>View All Dreams</a>
            {/* <div className='sort'>
                <Form onChange={sortDreams}>
                    <select name='sortBy'>
                        <option name='sortBy' value='desc'>Newest to Oldest</option>
                        <option name='sortBy' value='asc'>Oldest to Newest</option>
                    </select>
            </Form>
            </div> */}
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

// const mapStateToProps = state => ({
//     isLoading: state.isLoading,
//     error: state.error,
//     dreams: state.dreams,
//     page: state.page,
//     next: state.next
// })

// export default connect(mapStateToProps, {fetchDreams})(DreamsList);

export default DreamsList;