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
        console.log(e.target.name, e.target.value)
        setDream({
            ...dream,
            [e.target.name]: e.target.value
        })
    }

    const addDream = e => {
        e.preventDefault()
        setDream({...dream})
        AxiosWithAuth()
            .post(`/users/${id}/dreams`, dream)
            .then(res => {
                console.log('dream', res.data)
                setDream(dream)
                window.location.reload();
                setDream({date: '', description: ''})
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
                    <textarea
                     required
                     type='textarea'
                     name='description'
                     id='description'
                     placeholder='Description of Dream'
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