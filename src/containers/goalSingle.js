import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {removeGoal} from '../actions/index';

class GoalSingle extends Component {

    constructor(props) {
    super(props);

  }


render() {
    return (
      <li id={this.props.goalData.id} className="list-group-item list-item d-inline-flex justify-content-between align-items-center border-info text-info ">{this.props.goalData.goalText} <button className="btn btn-info" onClick={()=> {this.props.removeGoal(this.props.goalData.id)}}>Remove</button></li>

        );


      }
}

function mapDispatchToProps(dispatchRemove) {
    return bindActionCreators({removeGoal}, dispatchRemove);
}

export default connect(null, mapDispatchToProps) ( GoalSingle );
