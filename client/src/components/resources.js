import React from 'react';

const Resources = () => {
    return (
        <div className='resourcesDiv'>
            <header className='resourceHeader'>
                <h1 className='dreamMeaning'>Do dreams have a deeper meaning?</h1>
                <p>
                    Some psychologists think dreams are just the result of random brain activity. 
                    Others think dreams do have a deeper meaning, agreeing with Sigmund Freud's theory of dream interpretation.
                    Freud believed that dream interpretation was the "royal road" to the unconscious. 
                    He thought all dreams are forms of wish fulfillment, revealing your deepest desires.
                </p>
            </header> 
            <div className='dreamWebsites'>
                <h2>Analyze your dreams</h2>
                <a href='https://journeyintodreams.com/dream-dictionary/' target='_blank'><p className='journeyIntoDreams'>journeyintodreams.com</p></a>
                <a href='https://cafeausoul.com/dreams/dreamdictionary' target='_blank'><p className='cafeAuSoul'>cafeausoul.com</p></a>
            </div>          
        </div>
    )
}

export default Resources;