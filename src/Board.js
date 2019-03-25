import React from 'react'
import Square from './Square'

class Board extends React.Component {
  
    constructor(props) {
      super(props);
      this.state ={
        cardlayout:[
          [
            {val:2,id:Math.random()*1321232,isOpen:true},
            {val:5,id:Math.random()*1321232,isOpen:true},
            {val:1,id:Math.random()*1321232,isOpen:true}
          ],
          [
            {val:6,id:Math.random()*1321232,isOpen:true},
            {val:5,id:Math.random()*1321232,isOpen:true},
            {val:2,id:Math.random()*1321232,isOpen:true}
          ],
          [
            {val:1,id:Math.random()*1321232,isOpen:true},
            {val:6,id:Math.random()*1321232,isOpen:true},
            {val:3,id:Math.random()*1321232,isOpen:true}
          ],
          [
            {val:4,id:Math.random()*1321232,isOpen:true},
            {val:4,id:Math.random()*1321232,isOpen:true},
            {val:3,id:Math.random()*1321232,isOpen:true}
          ]
        ],
        clicks:0,
        isActive:false,
        prevCard:{},
        previ:-1,
        prevj:-1
      };
    }   
    change(i, j, card) {
      // this.setState({cardlayout[i][j].isOpen:true})
      let copyValues = this.state.cardlayout.slice();
      copyValues[i][j].isOpen=false; 
      this.setState({
        cardlayout:copyValues
      });
      console.log(card.isOpen)
      if(this.state.isActive===true) {
        this.compare(card,this.state.prevCard,i,j)
      }
      else {
        this.setState({isActive:true,prevCard:card,previ:i,prevj:j});
      }
    }
    compare(card,prevCard,i,j){
      console.log(i,j,this.state.previ,this.state.prevj);
      if(card.id===prevCard.id) {
        console.log('select another card');
      }
     else if(card.id!==prevCard.id && card.val===prevCard.val) {
        console.log('card matched');
        let copyValues = this.state.cardlayout.slice();
      copyValues[i][j].isOpen=false;
      copyValues[this.state.previ][this.state.prevj].isOpen=false; 
      this.setState({cardlayout:copyValues
      });
        this.setState({clicks:this.state.clicks+2,isActive:false,prevCard:''});
      }
      else {       
        setTimeout(
          function() {
            let copyValues = this.state.cardlayout.slice();
            copyValues[i][j].isOpen=true;
            copyValues[this.state.previ][this.state.prevj].isOpen=true; 
            this.setState({cardlayout:copyValues});
            console.log('seconds');
          }
          .bind(this),
          500
      );       
        this.setState({isActive:false,prevCard:''});
        console.log('card not matched');
      }
    }
    render() {  
      return (
        <div>
        <p>Welcome {this.props.match.params.name}</p>
        <div>
        {this.state.cardlayout.map((row, i)=>row.map((card,j)=>
          <Square  key={card.id} cards={card} change={this.change.bind(this, i, j)}/>))}
          <button>Number of Clicks:{this.state.clicks}</button>
        </div>
        </div>
      );
    }
  }
  export default Board