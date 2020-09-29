import React, {useState, useEffect} from 'react';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import moment from 'moment';
import DreamCard from './dreamCard';

const SearchForm = props => {
    const [page, setPage] = useState(1)
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([])

    const id = localStorage.getItem('id')

    useEffect(() => {
        AxiosWithAuth()
        .get(`/dreams/users/${id}?page=${page}&limit=5`)
        .then(res => {
            console.log(res.data)
            const dreams = res.data.dreamResults.filter(dream =>
                dream.description.toLowerCase().includes(searchTerm.toLowerCase()))
                setSearchResults(dreams)
        })
        .catch(err => console.log('Cannot find dreams with that keyword', err))
    }, [searchTerm])

    const handleChange = e => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className='searchForm'>
            <form>
                <label htmlFor='keyword'>Search for keyword: </label>
                <input
                 id='keyword'
                 type='text'
                 name='textfield'
                 value={searchTerm}
                 placeholder='Enter keyword to search'
                 onChange={handleChange}
                />
            </form>
            {/* <div className='searchList'>
                {searchResults.map(dream => {
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

            </div> */}

        </div>
    )
}

export default SearchForm;