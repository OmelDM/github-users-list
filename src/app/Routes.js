import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {UserDetails} from "../pages/user-details/UserDetails";
import {Users} from "../pages/users/Users";
import {NotFound} from "../pages/not-found/NotFound";



export const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/users/:id">
                <UserDetails/>
            </Route>
            <Route exact={true} path="/">
                <Users/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
};
