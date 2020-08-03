import React, { Component } from 'react';


class CartTable extends Component {
    
    render() { 
        return (
            <div className="container-fluid text-center d-none d-lg-block mb-4">
              <div className="row">
             <div className="col-10 mx-auto col-lg-2">
                 <b className="column">Product</b>
             </div>
             <div className="col-10 mx-auto col-lg-2">
                <b className="column">Title</b>
             </div>
             <div className="col-10 mx-auto col-lg-2">
               <b className="column">Price</b>
             </div>
             <div className="col-10 mx-auto col-lg-2 my-3 my-lg-0">
                <div className="d-flex justify-content-center">
                    <b className="column">Quantitiy</b>
                </div>                             
             </div>

             <div className="col-10 mx-auto col-lg-2">
                    <b className="column">Remove</b>       
             </div> 
             <div className="col-10 mx-auto col-lg-2 mt-2">
                    <b className="column">Total</b>                      
               </div> 
             </div>           
         </div>
         );
    }
}
 
export default CartTable;