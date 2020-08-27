import React, { useState } from 'react';
import { Button, Icon, Form, Message } from 'semantic-ui-react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const NewDream = props => {
    // retrieve user id from local storage
    const id = localStorage.getItem('id')

    // body required to create a new dream
    const [dream, setDream] = useState({
        date: '',
        description: '',
        user_id: id
    })

    // form change handler
    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setDream({
            ...dream,
            [e.target.name]: e.target.value
        })
    }

    // function to add new dream
    const addDream = e => {
        e.preventDefault()
        setDream({...dream})
        AxiosWithAuth()
            .post(`/dreams`, dream)
            .then(res => {
                console.log('dream', res.data)
                setDream(res.data)
                window.location.reload();
                // reset form after submit
                setDream({date: '', description: '', user_id: ''})
            })
            .catch(err => console.log('Unable to add dream', err))
    }

    return(
        <div className='newDreamDiv'>
            <Form className='newDreamForm' onSubmit={addDream} error>
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
                <Button type='submit' animated size='big'>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Form>
        </div>
    )
    
}

export default NewDream;