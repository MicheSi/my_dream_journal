import React, {useState, useEffect} from 'react';
import AxioswithAuth from '../utils/AxiosWithAuth';
import moment from 'moment';
import DreamCard from './dreamCard';

const SearchForm = props => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {

    }, [])

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
            <div className='searchList'>
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

            </div>

        </div>
    )
}