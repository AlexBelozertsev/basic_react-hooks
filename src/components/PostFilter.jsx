import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div className="post__filter">
            <Input
                value={filter.query}
                onChange={e=>setFilter({...filter, query: e.target.value})}
                placeholder='Search' />
            <Select
                value={filter.sort}
                defaultValue='Sort by:'
                onChange={selectedSort=>setFilter({...filter, sort:selectedSort})}
                options={[
                { value: 'id', name: 'by id' },
                { value: 'title', name: 'by title' },
                { value: 'body', name: 'by description' }
                ]}
            />
        </div>
    );
}
 
export default PostFilter;