import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PostList = ({ posts, topic, remove }) => {
    return (
        <div className="post__list">
            <h2 className="post__topic">{posts.length ? topic : 'Add new Post'}</h2>
            <ul>
                <li className="post">
                    <TransitionGroup>
                        {posts.map(post =>
                            <CSSTransition 
                                key={post.id}
                                timeout={500} 
                                classNames="post">
                                    <PostItem remove={remove} post={post} />
                            </CSSTransition>
                            )}
                    </TransitionGroup>
                </li>
            </ul>
        </div>
    )
}
 
export default PostList;