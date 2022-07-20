import React, {useContext, useState} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
    return (
        <div>
            <h1>Сторінка для входу</h1>
            <form onSubmit={login}>
                <MyInput onChange={event => setTitle(event.target.value)} value={title} type='text' placeholder='Введіть логін' />
                <MyInput onChange={event => setBody(event.target.value)} value={body} type='password' placeholder='Введіть пароль' />
                <MyButton>Ввійти</MyButton>
            </form>
        </div>
    );
};

export default Login;