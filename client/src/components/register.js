import React from 'react';
import { Button, Icon, Form } from 'semantic-ui-react'

const RegisterForm = () => {
    return (
        <div className='registerForm'>
            <h2>Register your Account</h2>
            <Form>
                <Form.Field>
                    <label>Username: </label>
                    <input placeholder='Please enter a username' />
                </Form.Field>
                <Form.Field>
                    <label>Password: </label>
                    <input placeholder='Please enter a password' />
                </Form.Field>
                <Button type='submit' animated>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Form>
        </div>
    )
}

export default RegisterForm;