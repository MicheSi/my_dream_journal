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

const SigninForm = props => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();
    // form validation
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    });

    // form change handler
    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // sign in registered user
    const signin = () => {
        AxiosWithAuth()
            .post('/auth/signin', user)
            .then(res => {
                // set token and user id to local storage
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                // reroute to user dashboard
                history.push('/dashboard');
            })
            .catch(err => console.log('Unable to sign in', err))
    }

    return (
        <div className='registerForm signinForm'>
            <h3>Please Sign In</h3>
            <Form onSubmit={handleSubmit(signin)}>
                <Form.Field>
                    <label for='username'>Username: </label>
                    <input
                     ref={register({required: true})}
                     type='text'
                     name='username'
                     id='username'
                     placeholder='Please enter your username'
                     value={user.username}
                     onChange={handleChange}
                    />
                </Form.Field>
                {errors.username && <p className='errors'>Please enter a valid username</p>}
                <Form.Field>
                    <label for='password'>Password: </label>
                    <input
                     ref={register({required: true})}
                     type='password'
                     name='password'
                     id='password'
                     placeholder='Please enter your password'
                     value={user.password}
                     onChange={handleChange}
                    />
                </Form.Field>
                {errors.password && <p className='errors'>Please enter a valid password</p>}
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