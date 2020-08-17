import React, { Component } from 'react';
import Product from './Product.js';
import {games} from '../data.js';
import Title from './Title.js';
import {Consumer} from '../provider.js';

class ProductList extends Component {
    state = {  
        games: games,
               
    }
     
    render() {  
          
        return ( 
            
            <>
            <div className="py-5">
                <div className="container">
                      <Title name="HOT STUFF"/>
                            
                    <div className="row">
                        <Consumer>                            
                            {value=>{                               
                                return( 
                                    <>                                                                                                                                        
                                    {value.games.map(game=>{
                                   return <Product key={game.id} game={game} />                                                                                                                                                                                                                  
                                  })}                                    
                                          
                                     </>                                              
         )}}  
                                                                                                                                                                                                                      
                        </Consumer>   
                                      
                    </div>
                </div>
            </div>
            </>
         );
    }
}
 
export default ProductList;

