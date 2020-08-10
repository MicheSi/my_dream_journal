import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const SigninForm = ({values, errors, touched, status}) => {
    const [user, setUser] = useState([])
    
    useEffect(() => {
        console.log('Status change', status);
        status && setUser(user => [...user, status])
    }, [status])

    return (
        <div className='registerDiv'>
            <h3>Please Sign In</h3>
            <Form className='registerForm'>
                <label htmlFor='username'>Username: </label>
                <Field
                 type='text'
                 name='username'
                 id='username'
                 placeholder='Please enter a username'
                />
                {touched.username && errors.username && (
                    <p className='errors'>{errors.username}</p>
                )}
                <label for='password'>Password: </label>
                <Field
                 type='password'
                 name='password'
                 id='password'
                 placeholder='Please enter a password'
                />
                {touched.password && errors.password && (
                    <p className='errors'>{errors.password}</p>
                )}
                <Button className='submitBtn' type='submit' animated floated='left'>
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
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('submitting data', values)
        AxiosWithAuth()
            .post('/auth/signin', values)
            .then(res => {
                console.log(res.data)
                setStatus(res.data)
                // set token and user id to local storage
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                // reset form to blank values
                resetForm()
                // reroute to user dashboard
                window.location.href='/dashboard'
            })
            .catch(err => console.log('Sign in failed', err))
    }
})(SigninForm)

export default FormikSigninForm;