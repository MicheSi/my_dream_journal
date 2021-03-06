import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { addUser } from '../actions/userActions';
import MenuBar from './menu';

const RegisterForm = ({values, errors, touched}) => {

    return (
        <div className='registerDiv'>
            <header className='regMenu'>
                {/* <MenuBar/> */}
                <h3>Register your Account</h3>
            </header>
            <Form className='registerForm'>
                <label htmlFor='username'>Username: </label>
                <Field
                 type='text'
                 name='username'
                 id='username'
                 placeholder='Please enter a username'
                 value={values.username}
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
                 value={values.password}
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
        username: Yup.string()
            .min(4, 'Username must be at least 4 characters')
            .required('Username is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters long')
            .required('Password is required')
    }),
    handleSubmit(values, {setStatus, setFieldError}) {
        console.log('submitting data', values)
        AxiosWithAuth()
            .post('/auth/register', values)
            .then(res => {
                console.log(res)
                setStatus(res.data)
                window.location.href='/signin'
            })
            .catch(err => {
                console.log('Registration failed', err.message)
                setFieldError('username', 'Username already exists')
            })
    }
})(RegisterForm)

const mapStateToProps = state => ({
    isLoading: state.isLoading,
    error: state.error,
    username: state.username,
    password: state.password
})

export default connect(mapStateToProps, {addUser})(FormikRegisterForm);