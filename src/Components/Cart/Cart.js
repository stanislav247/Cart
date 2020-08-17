import React, { Component } from 'react';
import Title from '../Title.js';
import CartTable from './CartTable.js';
import EmptyCart from './EmptyCart.js';
import {Consumer} from '../../provider.js';
import CartList from './CartList.js';
import CartTotlas from './CartTotals.js';


class Cart extends Component {
    state = { 

     }
    render() { 
        return ( 
                           
                <Consumer>
                    {value=>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return (
                            <>
                            <Title name="Your Cart"/>
                            <CartTable />
                            <CartList value={value}/>
                            <CartTotlas value={value} history={this.props.history} />
                            </>
                            )
                        }
                        else{
                            return <EmptyCart/> ;
                        }
                    }}
                </Consumer>               
                
                 
           
            
         );
    }
}
 
export default Cart;