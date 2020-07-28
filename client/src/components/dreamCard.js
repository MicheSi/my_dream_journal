import React, { useState, useEffect } from 'react';
import { Button, Card, Header, Icon, Modal } from 'semantic-ui-react';
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

    const changeHandler = e => {
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
                        {/* <Button basic color='violet'>
                            Edit
                        </Button> */}
                        <Modal trigger={<Button basic color='violet'>Edit</Button>} closeIcon>
                            <Header icon='archive' content='Archive Old Messages' />
                            <Modal.Content>
                                <p>
                                    Your inbox is getting full, would you like us to enable automatic
                                    archiving of old messages?
                                </p>
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
                        <Button basic color='red'>
                            Delete
                        </Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    )
}

export default DreamCard;