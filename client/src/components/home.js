import React from 'react';
import { Button, Icon } from 'semantic-ui-react'


const Home = () => {
    return (
        <div className='homePage'>
            <h1>My Dream Journal</h1>
            <p>Duis eu minim magna nulla sit commodo officia sit sunt id eiusmod. Cupidatat duis dolor id aliqua reprehenderit consectetur nulla. Cillum exercitation cillum nostrud esse laborum Lorem ipsum pariatur eiusmod cupidatat occaecat ut incididunt ullamco.
                on cupidatat occaecat et do deserunt adipisicing aliqua laboris nostrud exercitation. In cupidatat esse consequat labore ad amet in amet duis. Duis proident officia aliqua anim nisi dolore ad quis.
                Eiusmod qui ipsum minim quis eiusmod deserunt sunt. Cillum et enim dolore consequat excepteur consequat ut. Ut quis tempor nulla nostrud et
            </p>
            <div>
                <Button animated>
                    <Button.Content visible>Register</Button.Content>
                    <Button.Content hidden>
                    <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                <Button animated='fade'>
                    <Button.Content visible>Already have an account?</Button.Content>
                    <Button.Content hidden>Sign In</Button.Content>
                </Button>
            </div>
            
        </div>
    )
}

export default Home;