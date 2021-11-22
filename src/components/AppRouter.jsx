import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import {ecoRoutes} from "../router/routes";

const AppRouter = () => {
    return (
            <Switch>

                {ecoRoutes.map((route) =>
                    <Route
                        key = {route.path}
                        component = {route.component}
                        path = {route.path}
                        exact = {route.exact}
                    />)
                }

                <Redirect to='/eco/preview'/>

            </Switch>
    );
};

export default AppRouter;