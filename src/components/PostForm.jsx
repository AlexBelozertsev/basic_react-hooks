import React, {useRef, useState} from 'react';
import Button from './UI/button/Button';
import Input from './UI/input/Input';

const PostForm = ({create}) => {
  // const bodyInputRef = useRef();
    const initialPost = { title: '', body: '' };
    const [post, setPost] = useState(initialPost);
    const [id, setId] = useState(1);
    
    const handleChange = e => {
        e.currentTarget.name === 'title'
        ? setPost({ ...post, title: e.currentTarget.value })
        : setPost({ ...post, body: e.currentTarget.value })
    }

    const addNewPost = e => {
        e.preventDefault();
        setId(id + 1);
        const newPost = { id, ...post };
        create(newPost);
        setPost(initialPost);
        // console.log(bodyInputRef.current.value);
    }
    
    return ( 
      <form className="form" >
        {/* unguided component */}
        {/* <Input type="text" placeholder='title' ref={bodyInputRef} /> */}
        <Input type="text" name='title' placeholder='title' value={post.title} onChange={handleChange} />
        <Input type="text" name='text' placeholder='text' value={post.body} onChange={handleChange} />
        <Button type='submit' onClick={addNewPost} >Add</Button>
      </form>
     );
}
 
export default PostForm;