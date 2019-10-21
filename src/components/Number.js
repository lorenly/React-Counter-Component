import React from 'react';
import ReactDOM from 'react-dom';

class Number extends React.Component {
    constructor(props){
        super(props);
        this.state = {number: 0};
    }
  render(){
    return(
        <div className="Number">
            <header className="Number-header">
                <button onClick = { () =>
                    {this.setState({number: this.state.number+1})}}>
                    +
                </button>
                <button onClick = { () =>
                    {this.setState({number: this.state.number-1})}}>
                    -
                </button>
                <p>
                    number: {this.state.number}
                </p>
            </header>
        </div>
    );
  }
}

export default Number;