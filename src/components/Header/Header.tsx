import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={styles['container']}>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/admin'>Admin</Link>
            </nav>
        </header>
    );
};
