import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const RegisterForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const history = useHistory();

    useEffect(() => {
        status && setUser(user => [...user, status])
        history.push('/signin')
    }, [status])

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
        <div className='registerForm'>
            <h3>Register your Account</h3>
            <Form>
                <Form.Field>
                    <label for='username'>Username: </label>
                    <input
                     type='text'
                     name='username'
                     id='username'
                     placeholder='Please enter a username'
                    //  value={user.username}
                    //  onChange={handleChange}
                    />
                </Form.Field>
                {touched.username && errors.username && (
                    <p className='errors'>{errors.username}</p>
                )}
                <Form.Field>
                    <label for='password'>Password: </label>
                    <input
                     type='password'
                     name='password'
                     id='password'
                     placeholder='Please enter a password'
                    //  value={user.password}
                    //  onChange={handleChange}
                    />
                </Form.Field>
                {touched.password && errors.password && (
                    <p className='errors'>{errors.password}</p>
                )}
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

const FormikRegisterForm = withFormik({
    mapPropsToValues({ username, password }) {
        return {
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    }),
    submitForm (values, { setStatus }) {
        AxiosWithAuth()
            .post('/auth/register', values)
            .then(res => {
                console.log(res.data)
                setStatus(res.data)
            })
            .catch(err => console.log('Registration failed', err.res))
    }
})(RegisterForm)

export default FormikRegisterForm;