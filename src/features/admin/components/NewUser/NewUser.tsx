import { FC, useState, MouseEvent } from 'react';
import { AdminManager } from '../../Admin.manager';
import { User } from '../../model/User';

import styles from './NewUser.module.scss';

interface NewUserProps {
    onUserCreated: (user: User) => void;
}
export const NewUser: FC<NewUserProps> = ({ onUserCreated }) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const submit = async (ev: MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();

        setSubmitting(true);
        setError('');
        const { user, error } = await AdminManager.CreateUser(email, password);
        setSubmitting(false);

        if (error) {
            setError(error);
            return;
        }

        if (!user) {
            setError('An error occurred');
            return;
        }

        onUserCreated(user);
        setEmail('');
        setPassword('');
    };

    const showError = !!error;
    return (
        <div className={styles['container']}>
            <h3>Create new user</h3>
            <form>
                <input type='text' placeholder='Email' value={email} onChange={(ev) => setEmail(ev.target.value)} disabled={submitting} />
                <input type='password' placeholder='Password' value={password} onChange={(ev) => setPassword(ev.target.value)} disabled={submitting} />
                <button type='submit' disabled={submitting} onClick={submit}>
                    {submitting ? 'Creating user...' : 'Create user'}
                </button>
            </form>

            {showError && <div className={styles['error']}>Error: {error}</div>}
        </div>
    );
};
