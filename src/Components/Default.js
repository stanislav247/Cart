import React, { Component } from 'react';

class Default extends Component {
    state = { 

     }
    render() { 
        return (
            <div className="container text-center mt-5">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <h3><b>{this.props.location.pathname}</b> is invalid adress !</h3> 
            </div>
         );
    }
}
 
export default Default;