import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import style from './Navbar.module.css';
import Button from '../button/Button';
import {AuthContext} from '../../../context';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

    return ( 
      <div className={style.navbar} >
          <Button onClick={logout} >Logout</Button>
        <div className={style.navbar__links} >
          <Link className={style.navbar__item} to="/login">Login</Link>
          <Link className={style.navbar__item} to="/posts">Posts</Link>
          <Link className={style.navbar__item} to="/count">Counter</Link>
        </div>

      </div>
     );
}
 
export default Navbar;