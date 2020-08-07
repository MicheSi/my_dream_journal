import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'


const Home = () => {
    return (
        <div className='homePage'>
            <h1>My Dream Journal</h1>
            <div className='aboutDiv'>
            <p className='about'>Duis eu minim magna nulla sit commodo officia sit sunt id eiusmod. Cupidatat duis dolor id aliqua reprehenderit consectetur nulla. Cillum exercitation cillum nostrud esse laborum Lorem ipsum pariatur eiusmod cupidatat occaecat ut incididunt ullamco.
                on cupidatat occaecat et do deserunt adipisicing aliqua laboris nostrud exercitation. In cupidatat esse consequat labore ad amet in amet duis. Duis proident officia aliqua anim nisi dolore ad quis.
                Eiusmod qui ipsum minim quis eiusmod deserunt sunt. Cillum et enim dolore consequat excepteur consequat ut. Ut quis tempor nulla nostrud et
            </p>
            <div className='buttonsDiv'>
                <Button size='big' animated>
                    <Link to='/register'>
                        <Button.Content className='btnText' visible>Register</Button.Content>
                        <Button.Content className='btnText' hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Link>
                </Button>
                <Button size ='big' animated='fade'>
                    <Link to='/signin'>
                        <Button.Content className='btnText' visible>Already have an account?</Button.Content>
                        <Button.Content className='btnText' hidden>Sign In</Button.Content>
                    </Link>
                </Button>
            </div>
            </div>
        </div>
    )
}

export default Home;