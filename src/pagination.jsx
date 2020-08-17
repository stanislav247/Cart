import React from 'react';
import _ from "lodash" ;

const Pagination = (props) => {

const {itemsCount, pageSize , currentPage} = props ;
const pagesCount = Math.ceil(itemsCount/pageSize) ;
if (pagesCount === 1)  return null ;
const pages = _.range(1, pagesCount + 1) ;

    return <nav className="ml-5">
    <ul class="pagination">

    {pages.map(page=>(
        <li key={page} className={ page === currentPage ? 'page-item active' : 'page-item'}>
         <a className="page-link" onClick={()=>props.onPageChange(page)}>{page}</a>
        </li>
    ))}
    </ul>
  </nav>
}
 
export default Pagination;