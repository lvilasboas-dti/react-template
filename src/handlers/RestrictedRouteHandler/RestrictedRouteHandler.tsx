import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { RestrictedRouteHandlerReduxProps } from '.';

interface RestrictedRouteHandlerProps extends RestrictedRouteHandlerReduxProps {}
export const RestrictedRouteHandler: FC<PropsWithChildren<RestrictedRouteHandlerProps>> = ({ token, children }) => {
    const location = useLocation();

    if (token) {
        return <>{children}</>;
    }

    const redirectTo = encodeURI(location.pathname);
    return <Navigate to={`/login?redirectTo=${redirectTo}`} />;
};
