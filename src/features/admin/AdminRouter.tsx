import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRouteHandler } from '../../handlers/RestrictedRouteHandler';

export const AdminRouter: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<RestrictedRouteHandler>hi!</RestrictedRouteHandler>} />
        </Routes>
    );
};
