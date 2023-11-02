import { connect, ConnectedProps } from 'react-redux';
import { AppState } from '../../infrastructure/Store';
import { RestrictedRouteHandler } from './RestrictedRouteHandler';

const mapStateToProps = ({ admin }: AppState) => ({
    token: admin.token,
});

const connector = connect(mapStateToProps);
const RestrictedRouteHandlerConnected = connector(RestrictedRouteHandler);

export type RestrictedRouteHandlerReduxProps = ConnectedProps<typeof connector>;
export { RestrictedRouteHandlerConnected as RestrictedRouteHandler };
