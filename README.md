# My Dream Journal

## dream

/ drēm /

noun

a series of thoughts, images and sensations occurring in a person's mind during sleep


## Keeping a Dream Journal

There are many benefits to keeping a dream journal. Recurring dreams or symbols can reveal dream patterns that may stem from your waking life. Being aware of these patterns can help you gain a better understanding of yourself and your feelings. It can even help you practice lucid dreaming because you are more aware of your dreams. Dreams can also fuel your creativity. Many famous writers, artists and inventors say that their ideas came from their dreams.

Whatever the reason for wanting to keep a record of your dreams, I hope you enjoy using this dream journal. Let's get writing and sweet dreams!



## To install this app
1. Fork or clone the project.
2. Run npm i from the root folder to install dependencies for the backend server.
3. cd into Client folder and run npm i to install dependencies for the front-end app.

## Backend Endpoints

**Base URL: https://mydreamjournal.herokuapp.com**

**Register New User**
POST to /api/auth/register

Takes an object including:
```
{
    username: 'NewUsername', // Unique String
    password: 'password' // string
}
```

**Login Existing User**
POST to /api/auth/signin

Takes an object including:
```
{
    username: 'NewUsername',
    password: 'password'
}
```

## The following requires the user to be logged in

**Add New Dream to User Profile**
POST to /api/dreams

Takes an object including:
```
{
    date: '08/01/2020',
    description: 'These are the details of my dream',
    user_id: 1, // user's id #
}
```

**Retrieve all Dreams for a User**
GET to /api/dreams/users/:id

Returns an object including:
```
{
    id: 1, // dream id #
    date: '2020/08/01', // date format
    description: 'These are the details of my dream'
}
```

**Edit Dream Details**
PUT to /api/dreams/:id

Takes an object including:
```
{
    date: '08/01/2020',
    description: 'These are the details of my dream',
    user_id: 1, // user's id #
}
```

**Delete Dream**
DELETE to /api/dreams/:id



