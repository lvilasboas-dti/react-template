import { FC, useState, MouseEvent } from 'react';
import { LoginManager } from '../../Login.manager';
import { LoginReduxProps } from '.';
import { useNavigate, useSearchParams } from 'react-router-dom';

import styles from './Login.module.scss';

interface LoginProps extends LoginReduxProps {}

export const Login: FC<LoginProps> = ({ setToken }) => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const submit = async (ev: MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();

        setError(false);
        setLoading(true);
        const token = await LoginManager.Login(email, password);
        setLoading(false);

        if (!token) {
            setError(true);
            return;
        }

        setToken(token);

        const redirectTo = searchParams.get('redirectTo');
        if (redirectTo) navigate(redirectTo);
        else navigate('/admin');
    };

    return (
        <div className={styles['container']}>
            <form>
                <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} disabled={loading} />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} disabled={loading} />
                <button type='submit' onClick={submit} disabled={loading}>
                    {loading ? 'Logging in...' : 'Log in'}
                </button>
            </form>

            {error && <div>Invalid credentials</div>}
        </div>
    );
};
