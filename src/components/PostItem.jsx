import React from 'react';
import Button from './UI/button/Button';
import {useHistory} from 'react-router-dom';

const style = {
    border: "2px solid tomato",
    color: "tomato"
}

const PostItem = ({ post, remove }) => {
    const router = useHistory();
    return (
        <div className="post__item">
            <div className="post__item__text">
                <strong>{post.id}. <u>{post.title}</u></strong>
                <p>{post.body}</p>
            </div>
            <div className="post__btn">
                <Button onClick={() => router.push(`/posts/${post.id}`)} style={style} >Open</Button>
                <Button onClick={() => remove(post)} style={style} >Delete</Button>
            </div>
        </div>
     );
}
 
export default PostItem;