import React from 'react';
import MyButton from "./UI/button/MyButton";
import {useNavigate} from 'react-router-dom'
const PostItem = (props) => {
    const router = useNavigate()
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.number}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__btns'>
                <MyButton onClick={() => router(`/posts/${props.post.id}`)}>Відкрити</MyButton>
                <MyButton onClick={() => props.remove(props.post)}>Видалити</MyButton>
            </div>
        </div>
    );
};
export default PostItem;