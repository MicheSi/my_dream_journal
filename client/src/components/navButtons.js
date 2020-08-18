import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'

const NavButtons = () => {
    return (
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
    )
}

export default NavButtons;

