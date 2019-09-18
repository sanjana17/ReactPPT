import React from 'react';
import ReactDOM from 'react-dom';
import BasicPropsComponent from '../BasicProps/BasicPropsComponent'
import BasicStateless from '../BasicStateless/BasicStateless'


class BasicComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      festival: 'diwali',
    }
  }

  changeFestival= () => {
    this.setState({festival: 'holi'})
  }

  render() {
    return (
    <div>
      <BasicStateless name='navya'/>
      <BasicPropsComponent firstName='navya'/>{this.state.festival}
      <button type="button" onClick={this.changeFestival}>Change Festival</button>
    </div>);
  }
};

export default BasicComponent;