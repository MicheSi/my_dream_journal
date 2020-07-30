import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Icon, Form } from 'semantic-ui-react';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const RegisterForm = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();

    // handle changes to form input
    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // submit form info to register new user
    const register = e => {
        e.preventDefault();
        setUser({...user})
        AxiosWithAuth()
            .post('/auth/register', user)
            .then(res => {
                console.log(res.data)
                setUser(user)
                // reroute to sign in page after successful registration
                history.push('/signin')
                // reset form
                setUser({username: '', password: ''})
            })
            .catch(err => console.log('Registration failed', err))
    }

    return (
        <div className='registerForm'>
            <h3>Register your Account</h3>
            <Form onSubmit={register}>
                <Form.Field>
                    <label for='username'>Username: </label>
                    <input
                     required
                     type='text'
                     name='username'
                     id='username'
                     placeholder='Please enter a username'
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
                     placeholder='Please enter a password'
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

export default RegisterForm;