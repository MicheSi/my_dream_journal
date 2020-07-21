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
            .post('/auth/signin', user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token)
                history.push('/dashboard');
                setUser({username: '', password: ''})
            })
            .catch(err => console.log('Unable to sign in', err))
    }

    return (
        <div className='registerForm signinForm'>
            <h2>Please Sign In</h2>
            <Form onSubmit={signin}>
                <Form.Field>
                    <label for='username'>Username: </label>
                    <input
                     required
                     type='text'
                     name='username'
                     id='username'
                     placeholder='Please enter your username'
                     value={user.username}
                     onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label for='password'>Password: </label>
                    <input
                     required
                     type='password'
                     name='password'
                     id='password'
                     placeholder='Please enter your password'
                     value={user.password}
                     onChange={handleChange}
                    />
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