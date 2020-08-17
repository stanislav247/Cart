import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class EmptyCart extends Component {

    render() { 
        return (
            <div className="text-center">
                <h1 className="text-center mt-5">Your Cart is empty</h1>
                <br/>
                    <Link to="/">
                        <button className="btn btn-outline-info">Go back to products</button>
                    </Link>
            </div>
          );
    }
}
 
export default EmptyCart;