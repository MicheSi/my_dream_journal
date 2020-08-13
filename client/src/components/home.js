import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'


const Home = () => {
    return (
        <div className='homePage'>
            <h1>My Dream Journal</h1>
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
            <div className='aboutDiv'>
                <p className='dream'>dream</p>
                <p className='dreamDesc'>/ drēm /</p>
                <p className='noun'>noun</p>
                <p className='about'>
                    a series of thoughts, images and sensations occurring in a person's mind during sleep
                </p>
                <div className='aboutDreams'>
                    {/* <p className='dreamMeaning'>Do dreams have a deeper meaning?</p>
                    <p>
                        Some psychologists think dreams are just the result of random brain activity. 
                        Others think dreams do have a deeper meaning, agreeing with Sigmund Freud's theory of dream interpretation.
                        Freud believed that dream interpretation was the "royal road" to the unconscious. 
                        He thought all dreams are forms of wish fulfillment, revealing your deepest desires.
                    </p> */}
                    <div className='aboutApp'>
                        <p className='write'>Keeping a Dream Journal</p>
                        <p>
                            There are many benefits to keeping a dream journal.
                            Recurring dreams or symbols can reveal dream patterns that may stem from your waking life. 
                            Being aware of these patterns can help you gain a better understanding of yourself and your feelings. 
                            It can even help you practice lucid dreaming because you are more aware of your dreams.
                            Dreams can also fuel your creativity. Many famous writers, artists and inventors say that their ideas came from their dreams.
                        </p>
                        <p>
                            Whatever the reason for wanting to keep a record of your dreams, I hope you enjoy using this dream journal. 
                            Let's get writing and sweet dreams!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;