import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h2> Ви відкрили сторінку поста № {params.id} </h2>
            { isLoading ? <Loader /> : <div>{post.id}. {post.title}</div> }

            <h1 style={{textAlign: 'center', marginTop: '20px'}}>Коментарії</h1>
            {
                isComLoading ? <Loader /> :
                    <div>
                        {comments.map(comm =>
                            <div key={comm.id} style={{marginTop: '20px'}}>
                                <h3>{comm.email}</h3>
                                <h4>{comm.body}</h4>
                            </div>
                        )}
                    </div>
            }
        </div>
    );
};

export default PostIdPage;