import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const RegisterForm = ({values, errors, touched, status}) => {
    const [user, setUser] = useState([])
    
    useEffect(() => {
        console.log('Status change', status);
        status && setUser(user => [...user, status])
    }, [status])

    return (
        <div className='registerDiv'>
            <h3>Register your Account</h3>
            <Form className='registerForm'>
                <label htmlFor='username'>Username: </label>
                <Field
                 type='text'
                 name='username'
                 id='username'
                 placeholder='Please enter a username'
                />
                {touched.username && errors.username && (
                    <p className='errors usernameError'>{errors.username}</p>
                )}
                <label htmlFor='password'>Password: </label>
                <Field
                 type='password'
                 name='password'
                 id='password'
                 placeholder='Minimum length 8 characters'
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
                <a className='redirect' href='/signin'>Already have an account?</a>
            </Form>
        </div>
    )
}

const FormikRegisterForm = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || ''
        }
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .matches(/(?=.*[0-9])/, 'Password must contain a number')
            .required('Password is required')
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('submitting data', values)
        AxiosWithAuth()
            .post('/auth/register', values)
            .then(res => {
                console.log(res)
                setStatus(res.data)
                resetForm()
                window.location.href='/signin'
            })
            .catch(err => console.log('Registration failed', err))
    }
})(RegisterForm)

export default FormikRegisterForm;