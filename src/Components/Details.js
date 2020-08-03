import React, { Component } from 'react';
import {Consumer} from '../provider.js';
import {Link} from 'react-router-dom';

class Details extends Component {
    state = { 

     }
    render() { 
        return (  
            <Consumer>
                {(value)=>{
                    const {id, title, img , price , inCart,company,info} = value.gameDetail;
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                <h1>{title}</h1>
                            </div> 
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="game"/>
                                </div>

                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                     <h2 className="text-title text-uppercase text-muted mt-3 mb-2">Publisher:<br/> {company}</h2>
                                     <h4><b>Price: {price} €</b></h4>
                                     <h3 className="text-capitalize font-weight-bolder">Describtion:</h3><br/>
                                     <p className="font-italic text-capitalize h4">{info}</p><br/>
                                     {/* buttons */}
                                        <Link to="/">
                                        <button className="btn btn-outline-info mr-3 mb-3">Back to Products</button>
                                        </Link>
                                        <button 
                                            className="btn btn-outline-info mr-3 mb-3"
                                            disabled={inCart ? true: false}
                                            onClick={()=> {value.addToCart(id)}}
                                            >
                                            {inCart ? "in Cart" :"Add to Cart"} 
                                       </button>
                                </div>                               
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}
 
export default Details;