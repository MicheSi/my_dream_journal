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
                    <p className='errors'>{errors.username}</p>
                )}
                <label htmlFor='password'>Password: </label>
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

const FormikRegisterForm = withFormik({
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
            .post('/auth/register', values)
            .then(res => {
                console.log(res.data)
                setStatus(res.data)
                resetForm()
                window.location.href='/signin'
            })
            .catch(err => console.log('Registration failed', err))
    }
})(RegisterForm)

export default FormikRegisterForm;