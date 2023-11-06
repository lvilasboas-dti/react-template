import { FC } from 'react';
import { User } from '../../model/User';

interface UsersListProps {
    users: Array<User>;
}
export const UsersList: FC<UsersListProps> = ({ users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
