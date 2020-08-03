import React, { Component } from 'react';


const CartTotals = ({value}) => {
    const {clearCart,cartTotal,cartTax,subTotal} = value;
    return (  
            <>
            <div className="containe">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5 mr-2" onClick={()=>clearCart()}>Clear Cart</button>
                            <h5><span className="text-title mr-4">Subtotal: <strong>{Math.floor(subTotal * 100) / 100} €</strong></span></h5>
                            <h5><span className="text-title mr-4">Tax: <strong>{Math.floor(cartTax * 100) / 100} €</strong></span></h5>
                            <h5><span className="text-title mr-4">Total: <strong>{Math.floor(cartTotal * 100) / 100} €</strong></span></h5>
                    </div>
                </div>
            </div>
            </>
    );
}
 
export default CartTotals;