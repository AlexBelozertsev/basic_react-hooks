import React from 'react';
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({ totalPages, page, changePages }) => {
    const pagesArray = usePagination(totalPages);
    
    return ( 
        <div className='paginations_block'>
            {pagesArray.map(p =>
            <span
                key={p}
                className={page === p ? 'page page_current' : 'page'}
                onClick={() => changePages(p)} >
                {p}
            </span>
            )}
        </div>
    );
}
 
export default Pagination;