import React from 'react';
import NavButtons from './navButtons';
import Footer from '../components/footer';

const Home = () => {
    return (
        <div className='homePage'>
            <header className='homeHeader'>
                <div className='spacer'></div>
                <h1>My Dream Journal</h1>
                <NavButtons />
            </header>
            <div className='aboutDiv'>
                <p className='dream'>dream</p>
                <p className='dreamDesc'>/ drēm /</p>
                <p className='noun'>noun</p>
                <p className='about'>
                    a series of thoughts, images and sensations occurring in a person's mind during sleep
                </p>
                <div className='aboutDreams'>
                    <div className='aboutApp'>
                        <p className='write'>Keeping a Dream Journal</p>
                        <p>
                            There are many benefits to keeping a dream journal.
                            Recurring dreams or symbols can reveal dream patterns that may stem from your waking life. 
                            Being aware of these patterns can help you gain a better understanding of yourself and your feelings. 
                            It can even help you practice lucid dreaming because you are more aware of your dreams.
                            Dreams can also fuel your creativity. Many famous writers, artists and inventors say that their ideas came from their dreams.
                        </p>
                        <p className='aboutAppP3'>
                            Whatever the reason for wanting to keep a record of your dreams, I hope you enjoy using this dream journal. 
                            Let's get writing and sweet dreams!
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;