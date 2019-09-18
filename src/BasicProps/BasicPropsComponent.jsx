import React from 'react';
import ReactDOM from 'react-dom';

class BasicPropsComponent extends React.Component {
  render() {
    return <h1>Hi there,{this.props.firstName}</h1>;
  }
}

export default BasicPropsComponent;