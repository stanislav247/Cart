import React, { Component } from 'react';
import {games,gameDetail} from './data.js';


const ProductContext = React.createContext();

class Provider extends Component {
    state = { 
      games: [],
      gameDetail: gameDetail,
      cart: [],
      cartTotal :0,
      subTotal:0,
      cartTax: 0
     }
    
     // present copy of items instead  original form.
     componentDidMount(){
         this.setGames();
     }

     setGames=()=>{
         let tempGames = [] ;
         games.forEach(item=>{
             const singleItem = {...item};
             tempGames=[...tempGames , singleItem];
         });
         this.setState({
             games: tempGames
         });
     }

     getItem=id=>{
         const  game = this.state.games.find(item=> item.id === id);
         return game;
     }

     handleDetail=id=>{
         const game = this.getItem(id);
         this.setState(()=>{
             return {gameDetail: game}
         });
     }

     addToCart=id=>{
         let tempGames = [...this.state.games];
         const index = tempGames.indexOf(this.getItem(id));
         const game = tempGames[index];
         game.inCart = true;
         game.count = 1;
         const price = game.price;
         game.total = price;
         this.setState({games: tempGames, 
                        cart: [...this.state.cart, game],                                                                                           
        },()=>this.addMoney());                    
     }

    handleIncrement = id =>{
        let tempCart = [...this.state.cart];
        const selectedGame = tempCart.find(item=> item.id === id);
        const index = tempCart.indexOf(selectedGame);
        const game = tempCart[index];

        game.count  = game.count + 1 ;
        game.total = game.count * game.price;
        this.setState({
            cart:[...tempCart]
        },
        ()=>{this.addMoney()}
        )
    }
    handleDecrement = id =>{
        let tempCart = [...this.state.cart];
        const selectedGame = tempCart.find(item=> item.id === id);
        const index = tempCart.indexOf(selectedGame);
        const game = tempCart[index];

        game.count  = game.count - 1 ;

        if(game.count === 0){
            this.handleDelete(id);
        }else{
            game.total = game.count * game.price;
            this.setState({
                cart:[...tempCart]
            },
            ()=>{this.addMoney()}
            )
        }
    }
    handleDelete = id =>{
        let tempGames = [... this.state.games];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item=> item.id !== id);
        const index = tempGames.indexOf(this.getItem(id));
        let removedGame = tempGames[index];
        removedGame.total = 0;
        removedGame.inCart = false;
        removedGame.couunt = 0;

        this.setState({
            games: [...tempGames],
            cart: [...tempCart]          
        },
         ()=>this.addMoney()
        )
    }
    clearCart = ()=>{
        this.setState({cart:[]},
             this.setGames(),
             this.addMoney()
            );
    }
    addMoney = () =>{
        let subTotal = 0;
        this.state.cart.map(item=>(subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = tempTax;
        const total = tax + subTotal ;
        this.setState({
            cartTotal: total,
            subTotal: subTotal,
            cartTax: tax
        });
    }

    render() { 
        return ( 
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                handleIncrement: this.handleIncrement,
                handleDecrement:this.handleDecrement,
                handleDelete: this.handleDelete,
                clearCart:this.clearCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
         );
    }
}
 
const Consumer = ProductContext.Consumer;

export {Provider , Consumer}