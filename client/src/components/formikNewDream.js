import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import AxiosWithAuth from '../utils/AxiosWithAuth';

const NewDream = ({values, errors, touched, status}) => {
    // retrieve user id from local storage
    const id = localStorage.getItem('id')

    // body required to create a new dream
    const [dream, setDream] = useState([])

    useEffect(() => {
        console.log('Status change', status);
        status && setDream(dream => [...dream, status])
    }, [status])

    // function to add new dream
    // const addDream = e => {
    //     e.preventDefault()
    //     setDream({...dream})
    //     AxiosWithAuth()
    //         .post(`/dreams`, dream)
    //         .then(res => {
    //             console.log('dream', res.data)
    //             setDream(res.data)
    //             window.location.reload();
    //             // reset form after submit
    //             setDream({date: '', description: '', user_id: ''})
    //         })
    //         .catch(err => console.log('Unable to add dream', err))
    // }

    return(
        <div className='newDreamDiv'>
            <Form className='newDreamForm'>
                <label htmlFor='date'>Date: </label>
                <Field
                 type='date'
                 name='date'
                 id='date'
                 placeholder='Date'
                />
                {touched.date && errors.date && (
                    <p className='errors'>{errors.date}</p>
                )}
                <label htmlFor='description'>Description: </label>
                <Field
                 as='textarea'
                 type='text'
                 name='description'
                 id='description'
                 placeholder='Description of Dream'
                />
                {touched.description && errors.description && (
                    <p className='errors'>{errors.description}</p>
                )}
                <Button className='submitBtn' type='submit' animated size='big'>
                    <Button.Content visible>Submit</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Form>
        </div>
    )
    
}

const FormikNewDream = withFormik({
    mapPropsToValues(id, {date, description}) {
        return {
            date: date || '',
            description: description || '',
            user_id: id
        }
    },
    validationSchema: Yup.object().shape({
        date: Yup.date().required(),
        description: Yup.string().required()
    }),
    handleSubmit(values, {setStatus, resetForm}) {
        console.log('submitting dream', values)
        AxiosWithAuth()
            .post(`/dreams`, values)
            .then(res => {
                console.log(res.data)
                setStatus(res.data)
                resetForm()
                window.location.reload();
            })
            .catch(err => console.log('Unable to add dream', err.message))
    }
})(NewDream)

export default FormikNewDream;