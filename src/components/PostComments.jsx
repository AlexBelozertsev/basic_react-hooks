import React from 'react';

const PostComments = ({comments}) => {
    return ( 
        <div className='post__comment' >
            {comments.map(comment =>
                <div className='post__comm_item' key={comment.id} >
                    <h4>{comment.email}</h4>
                    <h5>{comment.name}</h5>
                    <p>{comment.body}</p>
                </div>
            )}
        </div>
     );
}
 
export default PostComments;