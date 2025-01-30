import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

export default class RedirectButton extends Component {
    constructor(props){
        super(props);

        this.state = {
            shouldRedirect: false
        }
    }

    // Function to redirect the page
    toggleShouldRedirect = () => {
        this.setState({shouldRedirect : !this.state.shouldRedirect});
    }

    render(){
        return(
            <>
            <button onClick={this.toggleShouldRedirect}>Go to HomePage</button>
            {/* If the first condition is true, do this  */}
            {this.state.shouldRedirect && <Navigate to={"/"} />}
            </>
        )
    }
}