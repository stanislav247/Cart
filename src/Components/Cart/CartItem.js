import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';

const CartItem = ({item , value}) => {
    const{id,title,img,price,total,count} = item; 
    const{handleIncrement,handleDecrement,handleDelete} = value;
    return ( 
        <>
         <div className="row my-2 text-capitalize text-center">
             <div className="col-10 mx-auto col-lg-2">
                 <img src={img} style={{width: '5rem' , height:'5rem'}} className="img-fluid" alt="product"/>
             </div>
             <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Game: </span>
                     <p className="mt-3">{title}</p> 
             </div>
             <div className="col-10 mx-auto col-lg-2">
             <span className="d-lg-none">Price: </span>
                     <p className="mt-3">{price} €</p> 
             </div>
             <div className="col-10 mx-auto col-lg-2 my-3 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-outline-info mx-1" onClick={()=>{handleDecrement(id)}}>-
                        </span>
                        <span className="btn btn-outline-info mx-1 countNum">
                            {count}
                        </span>
                        <span className="btn btn-outline-info mx-1" onClick={()=>{handleIncrement(id)}}>+
                        </span>
                    </div>
                </div>                             
             </div>

             <div className="col-10 mx-auto col-lg-2">
                    <FontAwesomeIcon icon={faTrash} size="2x" color="orange" onClick={()=>handleDelete(id)} className="trash mt-2"/>              
             </div> 
             <div className="col-10 mx-auto col-lg-2 mt-2">
                    <strong>Total: {Math.floor(total * 100) / 100} €</strong>                     
               </div>            
         </div>
        </>
     );
}
 
export default CartItem;