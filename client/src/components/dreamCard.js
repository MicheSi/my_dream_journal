import React, { useState, useEffect } from 'react';
import { Button, Card, Icon, Modal, Form } from 'semantic-ui-react';
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
    const [deleteOpen, setDeleteOpen] = useState(false)
    const [saveOpen, setSaveOpen] = useState(false)

    // set props to selected dream
    useEffect(() => {
        const dreamToEdit = props
        console.log('this is props', props)

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
        <div className='dreamCard allDreamCard'>
            <Card>
                <Card.Content>
                    <Card.Header className='dreamDate'>{props.date}</Card.Header>
                    <Card.Description className='dreamDesc'>
                        {props.description}
                    </Card.Description>

                    {/* Code for Modal to edit or delete dream */}
                    <Modal
                        size='small'
                        onClose={() => setOpen(false)}
                        onOpen={() => setOpen(true)}
                        open={open}
                        trigger={<Button className='editBtn' icon='edit' floated='right'></Button>}
                    >
                        <Modal.Header>Edit Dream</Modal.Header>
                        <Modal.Content>
                            <Modal.Description>
                                {/* code for edit form */}
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
                            <Button color='red' onClick={() => setDeleteOpen(true)}>
                                    <Icon name='trash'/> Delete
                            </Button>
                            <Button color='teal' onClick={() => setSaveOpen(true)}>
                                <Icon name='save'/> Save
                            </Button>
                            <Button icon='close' onClick={() => setOpen(false)}></Button>
                        </Modal.Actions>
                        {/* Confirm delete modal */}
                        <Modal
                            onClose={() => setDeleteOpen(false)}
                            open={deleteOpen}
                            size='mini'
                        >
                            <Modal.Header>Confirm Delete</Modal.Header>
                            <Modal.Content>
                                <p>Are you sure you want to delete this dream?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                content='Cancel'
                                onClick={() => setDeleteOpen(false)}
                                />
                                <Button
                                color='red'
                                icon='check'
                                content='Yes, Delete'
                                onClick={deleteDream}
                                />
                            </Modal.Actions>
                        </Modal>
                        {/* confirm edit modal */}
                        <Modal
                            onClose={() => setSaveOpen(false)}
                            open={saveOpen}
                            size='mini'
                        >
                            <Modal.Header>Confirm Update</Modal.Header>
                            <Modal.Content>
                                <p>Are you sure you want to update this dream?</p>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                content='Cancel'
                                onClick={() => setSaveOpen(false)}
                                />
                                <Button
                                color='teal'
                                icon='check'
                                content='Yes, Update'
                                onClick={editDream}
                                />
                            </Modal.Actions>
                        </Modal>
                    </Modal>
                </Card.Content>
            </Card>
        </div>
    )
}

export default DreamCard;