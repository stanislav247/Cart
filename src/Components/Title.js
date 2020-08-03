import React, { Component } from 'react';

const Title = ({name}) => {
    return (  
        <>
        <br/>
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold"><strong>{name}</strong></h1>
            </div>
        </div>
        </>
    );
}
 
export default Title;