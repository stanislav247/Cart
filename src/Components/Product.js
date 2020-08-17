import React, { Component } from 'react';
import {Consumer} from '../provider.js';
import {Link} from 'react-router-dom';
import Aos from 'aos';

class Product extends Component {
    
componentDidMount() {
    Aos.init({duration: 600});
}

    render() { 
        const {id, title, img , price , inCart} = this.props.game; 

        return (
            <div data-aos="fade-up" 
                 data-aos-once="true"
                 data-aos-anchor-placement="center-bottom"

            className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="cardd">
                    <Consumer>
                     {value=>(
                         <div className="img-container p-5"
                              onClick={()=>
                                value.handleDetail(id)}
                         >
                         <Link to="/details">
                             <img src={img} alt="game" height="220px" width="145px" className="game-cover"/>                                                      
                         </Link>
                             <br/><br/>
                             <b className="game-title">{title} <br/>{price} €</b>
                             <br/><br/>
                             <button 
                              className="btn btn-outline-info btn-sm"
                              disabled={inCart ? true: false}
                              onClick={()=> {
                                  value.addToCart(id)
                              }}
                              >
                              {inCart ? "in Cart" :"Add to Cart"} 
                                        </button>
                     </div>
                     )}
                    </Consumer>
                </div>
            </div>
          );
    }
}
 
export default Product;

