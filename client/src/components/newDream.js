import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const NewDream = () => (
  <Form>
    <Form.Field>
        <label for='date'>Date: </label>
        <input
         required
         type='date'
         name='date'
         id='date'
         placeholder='Date'
         value={}
         onChange={}
        />
    </Form.Field>
    <Form.Field>
        <label for='description'>Description: </label>
        <input
         required
         type='textarea'
         name='description'
         id='description'
         placeholder='Description'
         value={}
         onChange={}
        />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default NewDream;