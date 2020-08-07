import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Icon, Form } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import AxiosWithAuth from '../utils/AxiosWithAuth';

// schema requirements
const schema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required()
})

const RegisterForm = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();
    // form validation
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    // handle changes to form input
    const handleChange = e => {
        console.log(e.target.name, e.target.value)
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // submit form info to register new user
    const submitForm = () => {
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
        <div className='registerDiv'>
            <h3>Register your Account</h3>
            <Form className='registerForm' onSubmit={handleSubmit(submitForm)}>
                <Form.Field>
                    <label for='username'>Username: </label>
                    <input
                     ref={register({required: true})}
                     type='text'
                     name='username'
                     id='username'
                     placeholder='Please enter a username'
                     value={user.username}
                     onChange={handleChange}
                    />
                </Form.Field>
                {errors.username && <p className='errors'>Username Required</p>}
                <Form.Field>
                    <label for='password'>Password: </label>
                    <input
                     ref={register({required: true})}
                     type='password'
                     name='password'
                     id='password'
                     placeholder='Please enter a password'
                     value={user.password}
                     onChange={handleChange}
                    />
                </Form.Field>
                {errors.password && <p className='errors'>Password Required</p>}
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