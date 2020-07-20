import React from 'react';
import { Button, Icon, Form } from 'semantic-ui-react'

const SigninForm = () => {
    return (
        <div className='registerForm signinForm'>
            <h2>Please Sign In</h2>
            <Form>
                <Form.Field>
                    <label>Username: </label>
                    <input placeholder='Please enter your username' />
                </Form.Field>
                <Form.Field>
                    <label>Password: </label>
                    <input placeholder='Please enter your password' />
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

export default SigninForm;