import { connect, ConnectedProps } from 'react-redux';
import { AdminOperations } from '../../Admin.operations';
import { AdminHome } from './AdminHome';

const mapDispatchToProps = {
    clearToken: () => AdminOperations.SetToken(null),
};

const connector = connect(null, mapDispatchToProps);
const AdminHomeConnected = connector(AdminHome);

export type AdminHomeReduxProps = ConnectedProps<typeof connector>;
export { AdminHomeConnected as AdminHome };
