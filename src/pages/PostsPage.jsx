import React, { useState, useEffect, useRef } from 'react';

import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import {useObserver} from '../hooks/useObserver';
import PostServise from '../API/PostServise';
import '../styles/App.css';

import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import Modal from '../components/UI/modal/Modal';
import Button from '../components/UI/button/Button';
import Loader from '../components/UI/loader/Loader';
import Pagination from '../components/UI/pagination/Pagination';
import Select from '../components/UI/select/Select';

const style = {
  btn_add: {
    margin: "20px auto",
    border: "2px solid teal"
  },
}

function Post() {
  const [posts, setPosts] = useState([]);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElem = useRef();

  
  useEffect(() => {
    fetchPosts();
  }, [page, limit])
  
  const createPost = newPost => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = remPost => setPosts(posts.filter(p => p.id !== remPost.id));
  
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, loader, postErr] = useFetching(async() => {
    const response = await PostServise.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })
  
  const changePages = page => setPage(page);
  useObserver(lastElem, page < totalPages, loader, () => { setPage(page + 1) });
 
  return (
    <div className="App">
      <Button onClick={fetchPosts} >Get posts</Button>
      <Button onClick={() => setModal(true)} style={style.btn_add} >
        Add new Post
      </Button>
      <Modal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <Select
        value={limit}
        defaultValue='Elements on page'
        onChange={value => setLimit(value)}
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 15, name: '15' },
          { value: -1, name: 'all' },
        ]}
      />
      {postErr && <h2>Error: {postErr}</h2> }
      {loader && <Loader /> }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} topic='Post List' />
      <div ref={lastElem} />
      <Pagination totalPages={totalPages} page={page} changePages={changePages} />
    </div>
  );
}

export default Post;
