import React, { Component } from 'react';
import GoalSingle from './goalSingle';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getInitialGoals } from '../actions/index';



class GoalList extends Component {

  constructor(props) {
    super(props);
  }


componentWillMount() {
  this.props.getInitialGoals();
}


          render() {
            return (
              <div className="col-sm-6 float-sm-left ">
                <h2 className="alert alert-info text-center">Here is what you need to do:</h2>
                <ul className="card list-group list-group-info">
                  {this.props.goals.map( goal => <GoalSingle key={goal.id} goalData={goal} />)}
                </ul>
              </div>
            );
          }



}

function mapStateToProps(state) {
  return { goals: state.goals }
}

function mapDispatchToProps(disptachGetInitialGoals) {
  return bindActionCreators({ getInitialGoals }, disptachGetInitialGoals);
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalList);
