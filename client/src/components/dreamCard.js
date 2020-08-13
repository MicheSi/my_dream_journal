import React, { useState, useEffect } from 'react';
import { Button, Card, Header, Icon, Modal, Form } from 'semantic-ui-react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const DreamCard = props => {
    // retrieving user id from local storage
    const id = localStorage.getItem('id')

    // required info for dream
    const initialState = {
        date: '',
        description: '',
        user_id: id
    }

    // dream state
    const [dream, setDream] = useState(initialState);
    // modal state
    const [open, setOpen] = useState(false)

    // set props to selected dream
    useEffect(() => {
        const dreamToEdit = props

        if (dreamToEdit) {
            setDream(dreamToEdit)
        }
    }, [props])

    // change handler for form
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
            .put(`/dreams/${props.id}`, dream)
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
            .delete(`/dreams/${props.id}`)
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
                    <Modal
                        size='tiny'
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button icon='edit' floated='right'></Button>}
                    >
                        <Modal.Header>Edit Dream</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                <Form className='editForm' onSubmit={editDream} >
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
                                </Form>
                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='red' onClick={deleteDream}>
                                    <Icon name='trash'/> Delete
                            </Button>
                            <Button color='green' onClick={editDream}>
                                <Icon name='save'/> Save
                            </Button>
                            <Button icon='close' onClick={() => setOpen(false)}></Button>
                        </Modal.Actions>
                    </Modal>
                </Card.Content>
            </Card>
        </div>
    )
}

export default DreamCard;