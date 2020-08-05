import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { withFormik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AxiosWithAuth from '../utils/AxiosWithAuth';


const SigninForm = ({
    values, errors, touched, status
}) => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    useEffect(() => {
        status && setUser(user => [...user, status])
    }, [status])

    const history = useHistory();

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
            <Form>
                <Form.Field>
                    <label for='username'>Username: </label>
                    <input
                     type='text'
                     name='username'
                     id='username'
                     placeholder='Please enter your username'
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
                     placeholder='Please enter your password'
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

const FormikSigninForm = withFormik({
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
    signin(values, { setStatus }) {
        AxiosWithAuth()
            .post('/auth/signin', values)
            .then(res => {
                // set token and user id to local storage
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                setStatus(res.data)
            })
            .catch(err => console.log('Unable to sign in', err.res))
    }
})(SigninForm)

export default FormikSigninForm;