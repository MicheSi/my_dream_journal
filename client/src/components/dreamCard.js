import React from 'react';
import { Button, Card } from 'semantic-ui-react'

const DreamCard = props => {

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
                        <Button basic color='violet'>
                            Edit
                        </Button>
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