import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'


const Home = () => {
    return (
        <div className='homePage'>
            <h1>My Dream Journal</h1>
            <div className='aboutDiv'>
                <p className='dream'>dream</p>
                <p className='dreamDesc'>| drēm | noun</p>
                <p className='about'>
                    a series of thoughts, images and sensations occurring in a person's mind during sleep
                </p>
                <div className='aboutApp'>
                    <p className='dreamMeaning'>Do dreams have a deeper meaning?</p>
                    <p>
                        Some psychologists think dreams are just the result of random brain activity. 
                        Others think dreams do have a deeper meaning, agreeing with Sigmund Freud's theory of dream interpretation.
                        Freud believed that dream interpretation was the "royal road" to the unconscious. 
                        He thought all dreams are forms of wish fulfillment, revealing your deepest desires.
                    </p>
                </div>
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