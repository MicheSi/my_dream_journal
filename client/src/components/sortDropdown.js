import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const sortOptions = [
    {
        key: 'Newest to Oldest',
        text: 'Newest to Oldest',
        value: 'Newest to Oldest'
    },
    {
        key: 'Oldest to Newest',
        text: 'Oldest to Newest',
        value: 'Oldest to Newest'
    },
]

const SortDropdown = (props) => {

    return (
        <div className='sort'>
            <Form>
                <select name='sortBy'>
                    <option name='sortBy' value='desc'>Newest to Oldest</option>
                    <option name='sortBy' value='asc'>Oldest to Newest</option>
                </select>
            </Form>
        </div>
    )
}
    
export default SortDropdown;