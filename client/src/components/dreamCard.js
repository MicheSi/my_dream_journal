import React, { useState, useEffect } from 'react';
import { Button, Card, Header, Icon, Modal, Form } from 'semantic-ui-react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const DreamCard = props => {
    const initialState = {
        date: '',
        description: ''
    }

    const [dream, setDream] = useState(initialState);
    console.log(props)

    // set props to selected dream
    useEffect(() => {
        const dreamToEdit = props

        if (dreamToEdit) {
            setDream(dreamToEdit)
        }
    }, [props])

    const handleChange = e => {
        setDream({
            ...dream,
            [e.target.name]: e.target.value
        })
    }

    // edit dream function
    const editDream = e => {
        e.preventDefault()
        AxiosWithAuth()
            .put()
            .then(res => {
                console.log('updated dream', res)
                window.location.reload()
            })
            .catch(err => console.log('Cannot update dream', err))
    }

    // delete dream function
    const deleteDream = e => {
        e.preventDefault()
        AxiosWithAuth()
            .delete()
            .then(res => {
                console.log('deleted dream', res)
                window.location.reload()
            })
            .catch(err => console.log('Unable to delete dream', err))

    }

    return (
        <div className='dreamCard'>
            <Card>
                <Card.Content>
                    <Card.Header>{props.date}</Card.Header>
                    <Card.Description>
                        {props.description}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Modal trigger={<Button basic color='violet'>Edit</Button>} closeIcon>
                            <Header icon='archive' content='Archive Old Messages' />
                            <Modal.Content>
                                <Form onSubmit={editDream}>
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
                                    <Button type='submit'>Edit Dream</Button>
                                </Form>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button color='red'>
                                    <Icon name='remove' /> No
                                </Button>
                                <Button color='green'>
                                    <Icon name='checkmark' /> Yes
                                </Button>
                            </Modal.Actions>
                        </Modal>
                        <Button basic color='red' onClick={deleteDream}>
                            Delete
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default DreamCard;