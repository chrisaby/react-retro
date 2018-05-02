import React from 'react';

import './Pixel.css'

export default class Pixel extends React.Component{
    constructor(props){
        super(props);
        this.state={active:true,val:"+"};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        var nval = "+";
        if(this.state.val=="+"){
            nval = "-";
        }
        this.setState({val:nval,active:!this.state.active});
    }
    render(){
        return(<div className={"pixel" + (this.state.active?"":" active-pixel")} onMouseEnter={this.handleChange}
             onMouseLeave={this.handleChange}>{/*this.state.val*/}</div>);
    }
}