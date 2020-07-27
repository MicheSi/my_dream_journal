import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const NewDream = props => {
    const [dream, setDream] = useState({
        date: '',
        description: ''
    })

    const id = localStorage.getItem('id')

    const handleChange = e => {
        setDream({
            ...dream,
            [e.target.name]: e.target.value
        })
    }

    const addDream = e => {
        e.preventDefault()
        setDream({...dream})
        AxiosWithAuth(`/users/${id}/dreams`, dream)
            .post()
            .then(res => {
                console.log('dream', res.data)
            })
            .catch(err => console.log('Unable to add dream', err))
    }

    return(
        <div className='newDreamForm'>
            <Form onSubmit={addDream}>
                <Form.Field>
                    <label for='date'>Date: </label>
                    <input
                     required
                     type='date'
                     name='date'
                     id='date'
                     placeholder='Date'
                     value={dream.date}
                     onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label for='description'>Description: </label>
                    <input
                     required
                     type='text'
                     name='description'
                     id='description'
                     placeholder='Description'
                      value={dream.description}
                      onChange={handleChange}
                    />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
    
}

export default NewDream;