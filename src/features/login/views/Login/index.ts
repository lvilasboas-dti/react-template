import { connect, ConnectedProps } from 'react-redux';
import { AdminOperations } from '../../../admin/Admin.operations';
import { Login } from './Login';

const mapDispatchToProps = {
    setToken: AdminOperations.SetToken,
};

const connector = connect(null, mapDispatchToProps);
const LoginConnected = connector(Login);

export type LoginReduxProps = ConnectedProps<typeof connector>;
export { LoginConnected as Login };
