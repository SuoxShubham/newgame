import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
class Square extends React.Component {
  render() {
    const isClicked = this.props.cards.isOpen;
    const clickState=<h1>{this.props.cards.val}</h1>  
    return (      
        <button  disabled={!this.props.cards.isOpen} className="square"         
        onClick= {()=>this.props.change(this.props.cards)}>
        {/* <img src="../images/index.png"/>
        {this.props.cards.val} */}
        {isClicked?<img src="../images/index.png"/>:clickState}
        </button>
      );
    } 
  }
  export default Square