import React from 'react';
import { Button, Form } from 'semantic-ui-react'

const RegisterForm = () => {
    return (
        <div className='registerForm'>
            <h2>Register your Account</h2>
            <Form>
                <Form.Field>
                    <label>Username: </label>
                    <input placeholder='Username' />
                </Form.Field>
                <Form.Field>
                    <label>Password: </label>
                    <input placeholder='Password' />
                </Form.Field>
                <Button type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default RegisterForm;