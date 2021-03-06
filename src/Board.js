import React, {Component} from 'react';
import App from './App.js'
import Square from './Square.js'

//Create a class that extends a component
//Create a state for default spaces, a bomb, treasure, and click count 
//Use random num generator as the state of bomb and treasure

class Board extends Component{
    constructor(props){
        super(props)
        this.state = {
            spaces: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
            randomBomb: Math.floor(Math.random() * 8),
            randomTreasure: Math.floor(Math.random() * 8),
            count: 0
        }
   
    }
//Create a method that will be called upon when clicked
//When clicked it will determine the random value 
//When each square is clicked it will increase turn count 
    
    handleClick(i) {
        const { randomBomb, randomTreasure } = this.state 
        const spaces = this.state.spaces
        const count = this.state.count

        if(i === randomBomb){
            spaces[i] = 'Bomb';
            this.setState({spaces: spaces});
            alert ('You lose!')
            window.location.reload()
        } else if(i === randomTreasure) {
            spaces[i] = 'Treasure';
            this.setState({spaces: spaces}); 
            alert ('Winner!')
            window.location.reload()
        }else{
            spaces[i] = "Tree";
            this.setState({spaces: spaces});
        }
        
        count: this.setState({ count: count + 1 })
    }
    
//Create a method that calls upon each square
//The method will display the default state
//When clicked it will call upon another method that will determine the hidden value
    
    renderSquare=(i)=>{
        return (
            <Square 
            value={this.state.spaces[i]}
            onClick={() => this.handleClick(i)}
            />
        )
    }
    
    resetForm = () => {
      this.setState({
          ...this.state,
          spaces: ['?', '?', '?', '?', '?', '?', '?', '?', '?'],
      })
      window.location.reload()
    }
    
    render () {
    let status = 'Treasure Hunt: '
    
    return(
        <div className="board">
            <div className="status">{status}</div>
            <table>
                <tr>
                    <td >{this.renderSquare(0)}</td>
                    <td >{this.renderSquare(1)}</td>
                    <td >{this.renderSquare(2)}</td>
                </tr>
                <tr>
                    <td >{this.renderSquare(3)}</td>
                    <td >{this.renderSquare(4)}</td>
                    <td >{this.renderSquare(5)}</td>
                </tr>
                <tr>
                    <td >{this.renderSquare(6)}</td>
                    <td >{this.renderSquare(7)}</td>
                    <td >{this.renderSquare(8)}</td>
                </tr>
            </table>
            <br></br>
            <div className="count">Turn Count: {this.state.count}</div>
            <button className="reset" onClick={this.resetForm}>Play Again</button>
        </div>
    );
 }   
}

export default Board