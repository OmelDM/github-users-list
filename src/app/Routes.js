import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {UserList} from "../pages/UserList";
import {UserDetails} from "../pages/UserDetails";
import {NotFound} from "../pages/NotFound";

export const Routes = () => {
    return (
        <Switch>
            <Route exact={true} path="/users/:id">
                <UserDetails/>
            </Route>
            <Route exact={true} path="/">
                <UserList/>
            </Route>
            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
};
