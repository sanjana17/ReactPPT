import React from 'react';
import ReactDOM from 'react-dom';

class BasicForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' , password: 'password'};
    }
    myChangeHandler = (event) => {
      this.setState({...this.state, username: event.target.value});
    }
    render() {
        console.log("hello")
      return (
        <form>
        <h1>Hello {this.state.username}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
            <input
                type='text'
                value={this.state.password}
                readOnly
            />
        </form>
      );
    }
  }

  export default BasicForm;