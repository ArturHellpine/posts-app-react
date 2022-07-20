import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className='navbar'>
            <MyButton onClick={logout}>
                Вихід
            </MyButton>
            <div className='navbar__links'>
                <Link to="/about">Тестова сторінка</Link>
                <Link to="/posts">Пости</Link>
            </div>
        </div>
    );
};

export default Navbar;
