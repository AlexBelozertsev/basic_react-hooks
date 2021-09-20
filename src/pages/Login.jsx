import React, { useContext } from 'react';
import Input from '../components/UI/input/Input';
import Button from '../components/UI/button/Button';
import {AuthContext} from '../context';

const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    
    const login = e => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
    }

    return ( 
        <div>
            <h1>Login Page</h1>
            <form onSubmit={login} >
                <Input
                    type="text"
                    name='name'
                    placeholder='Your Name'
                    // value={}
                    // onChange={handleChange}
                />
                <Input
                    type="password"
                    name='password'
                    placeholder='Your Password'
                    // value={}
                    // onChange={handleChange}
                />
                <Button>Enter</Button>
            </form>
        </div>
     );
}
 
export default Login;