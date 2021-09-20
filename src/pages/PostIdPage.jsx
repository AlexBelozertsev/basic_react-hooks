import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import '../styles/App.css';
import PostService from '../API/PostServise';
import PostComments from '../components/PostComments';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data);
    })

    const [fetchComments, isCommentLoading, CommentError] = useFetching(async () => {
        const resp = await PostService.getCommentsById(params.id)
        setComments(resp.data)
    });

    useEffect(() => {
        fetchPostById()
        fetchComments()
    }, [])

    return ( 
        <div className='post__id_page' >
            <h2>This is {params.id} Post Page</h2>
            {isLoading
                ? <Loader/>
                : <h3>{post.title}</h3>
            }
            <h3><u>Comments:</u></h3>
            {isCommentLoading
                ? <Loader />
                : <PostComments comments={comments} />
            }
        </div>
     );
}
 
export default PostIdPage;