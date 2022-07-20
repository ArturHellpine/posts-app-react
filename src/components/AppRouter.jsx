import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    element={<route.element />}
                    path={route.path}
                    key={route.path}
                />
            )}
            <Route path="/*" element={<Navigate replace to="/posts" />}></Route>
        </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.element />}
                        path={route.path}
                        key={route.path}
                    />
                )}
                <Route path="/*" element={<Navigate replace to="/login" />}></Route>
            </Routes>
    );
};

export default AppRouter;