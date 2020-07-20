import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Icon, Form } from 'semantic-ui-react'
import AxiosWithAuth from '../utils/AxiosWithAuth';

const SigninForm = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();

    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const signin = e => {
        e.preventDefault();
        setUser({...user})
        AxiosWithAuth()
            .post('/auth/login', user)
            .then(res => {
                console.log(res.date, user)
                localStorage.setItem('token', res.data.token)
                history.push('/dashboard');
                setUser({username: '', password: ''})
            })
    }

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