import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';
import {Link} from 'react-router-dom'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state= {name:''};
        this.handlesubmit = this.handlesubmit.bind(this);
        this.change = this.change.bind(this);
    }
    change(e) {
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        });
        
    }
    // handlesubmit(e) {
    //     e.preventDefault(); 
    //     console.log(this.state.name);
    // }
    render() {
        return(
                <div>
                    <form>
                    <input type="text" onChange={this.change}
                    value={this.state.name} placeholder="Enter your nickname" 
                    required/>
                   <Link to={`board/${this.state.name}`}> 
                   <button>Let's go</button></Link>                 
                    </form>
                    {/* <Board /> */}
                </div>
        );
    }
}
export default Login;