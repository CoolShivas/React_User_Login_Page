import { useContext } from 'react';
import AuthContext from '../../store/AuthContext';
import classes from './Navigation.module.css';

const Navigation = () => {

    const xyz = useContext(AuthContext);

    return <nav className={classes.nav}>
        <ul>
            {xyz.isLoggedIn && (
                <li>
                    <a href="/">Users</a>
                </li>
            )}
            {xyz.isLoggedIn && (
                <li>
                    <a href="/">Admin</a>
                </li>
            )}
            {xyz.isLoggedIn && (
                <li>
                    <button onClick={xyz.onLogout}>Logout</button>
                </li>
            )}
        </ul>
    </nav>
};

export default Navigation;
