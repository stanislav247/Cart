import React, { Component } from 'react';
import PayPalButton from './PayPalButton.js';

const CartTotals = ({value,history}) => {
    const {clearCart,cartTotal,cartTax,subTotal} = value;
    return (  
            <>
            <div className="containe">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5 mr-2" onClick={()=>clearCart()}>Clear Cart</button>
                            <h5><span className="text-title mr-4">Subtotal: <strong>{subTotal.toFixed(2)} €</strong></span></h5>
                            <h5><span className="text-title mr-4">Tax: <strong>{cartTax.toFixed(2)} €</strong></span></h5>
                            <h5><span className="text-title mr-4">Total: <strong>{cartTotal.toFixed(2)} €</strong></span></h5>
                            <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>
                    </div>
                </div>
            </div>
            </>
    );
}
 
export default CartTotals;