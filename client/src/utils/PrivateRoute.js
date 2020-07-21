import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
    return localStorage.getItem('token') ? true: false;
}

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render = {({ location }) =>
                isAuthenticated() ? (
                    <Component/>
                ) : (
                    <Redirect
                        to={{
                            pathname: '/',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}