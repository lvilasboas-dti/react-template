import { FC, useEffect, useState } from 'react';
import { AdminManager } from '../../Admin.manager';
import { User } from '../../model/User';
import { UsersList } from '../../components/UsersList';
import { AdminHomeReduxProps } from '.';
import { NewUser } from '../../components/NewUser';

import styles from './AdminHome.module.scss';

interface AdminHomeProps extends AdminHomeReduxProps {}
export const AdminHome: FC<AdminHomeProps> = ({ clearToken }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [users, setUsers] = useState<Array<User>>([]);

    useEffect(() => {
        listUsers();
    }, []);

    const listUsers = async () => {
        setLoading(true);
        const result = await AdminManager.ListUsers();
        setLoading(false);

        if (!result) {
            clearToken();
            return;
        }

        setUsers(result);
    };

    const onUserAdded = (user: User) => {
        setUsers((prev) => [...prev, user]);
    };

    return (
        <div className={styles['container']}>
            {loading ? (
                <>Loading...</>
            ) : (
                <>
                    <UsersList users={users} />
                    <NewUser onUserCreated={onUserAdded} />
                </>
            )}
        </div>
    );
};
