import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import 'antd/dist/antd.css';
import 'aos/dist/aos.css';
import {Switch , Route} from 'react-router-dom'; 
import Navbarr from './Components/Navbar.js';
import ProductList from './Components/ProductList.js';
import Details from './Components/Details.js';
import Cart from './Components/Cart';
import Default from './Components/Default.js';



class App extends React.Component {
   
  
       render(){  
         
         return(
            <>
            <Navbarr/>
             <Switch>
               <Route exact path="/" component={ProductList} />
               <Route path="/details" component ={Details} />
               <Route path="/cart" component ={Cart} />
               <Route component={Default}/>
             </Switch>
            </>
         )           
         
       }
    }
export default App;