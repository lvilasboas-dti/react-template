import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRouteHandler } from '../../handlers/RestrictedRouteHandler';
import { AdminHome } from './views/AdminHome';

export const AdminRouter: FC = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <RestrictedRouteHandler>
                        <AdminHome />
                    </RestrictedRouteHandler>
                }
            />
        </Routes>
    );
};
