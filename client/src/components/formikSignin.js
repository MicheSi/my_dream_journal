import React from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AxiosWithAuth from '../utils/AxiosWithAuth';
import { signinUser } from '../actions/userActions';
import MenuBar from './menu';

const SigninForm = ({values, errors, touched}) => {

    return (
        <div className='registerDiv signinDiv'>
            <header className='regMenu'>
                <MenuBar/>
                <h3 className='signInHeader'>Please Sign In</h3>
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
                    <p className='errors'>{errors.username}</p>
                )}
                <label htmlFor='password'>Password: </label>
                <Field
                 type='password'
                 name='password'
                 id='password'
                 placeholder='Please enter a password'
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
                <a className='redirect' href='/register'>Register for a new account?</a>
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
        username: Yup.string().required('Please enter a username'),
        password: Yup.string().required('Please enter a password')
    }),
    handleSubmit(values, {setStatus, setFieldError}) {
        console.log('submitting data', values)
        AxiosWithAuth()
            .post('/auth/signin', values)
            .then(res => {
                console.log(res.data)
                setStatus(res.data)
                // set token and user id to local storage
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('id', res.data.id)
                // reroute to user dashboard
                window.location.href='/dashboard'
            })
            .catch(err => {
                console.log('Sign in failed', err)
                setFieldError('username', 'Please check username')
                setFieldError('password', 'Please check password')
            })
    }
})(SigninForm)

const mapStateToProps = state => ({
    isLoading: state.loading,
    error: state.error,
    username: state.username,
    password: state.password
})

export default connect(mapStateToProps, {signinUser})(FormikSigninForm);