import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addGoal} from '../actions/index';

class TaskInput extends Component {

  constructor(props) {
    super(props);
    this.state = { item: ""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  render() {
    return (
      <div className="list-input col-sm-6 float-sm-right">
        <h2 className="alert alert-info text-center">Input your next goal here:</h2>
        <form className="form-group" onSubmit={this.handleSubmit}>
          <input

            className="form-control form-control-lg border-info text-info"
            type="text"
            value= {this.state.item}
            onChange={this.handleChange} />
        </form>
      </div>
  );
  }

  handleChange(event) {
    this.setState({item: event.target.value});

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addGoal(this.state.item);
    this.setState({item: ''});

  }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({addGoal}, dispatch);

}


export default connect(null, mapDispatchToProps) ( TaskInput );
