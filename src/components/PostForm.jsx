import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import {useState} from "react";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
    }
    return (
        <form>
            <MyInput
                onChange={event => setPost({...post, title: event.target.value})}
                value={post.title}
                type={'text'}
                placeholder={'Заголовок'}
            />
            <MyInput
                onChange={event => setPost({...post, body: event.target.value})}
                value={post.body}
                type={'text'}
                placeholder={'Опис'}
            />
            <MyButton onClick={addNewPost}>Створити</MyButton>
        </form>
    );
};
export default PostForm;