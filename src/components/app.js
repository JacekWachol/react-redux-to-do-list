import React, { Component } from 'react';
import TaskInput from '../containers/taskInput';
import GoalList from '../containers/goalList';

export default class App extends Component {

render() {
    return (
            <div className="container h-100">
              <TaskInput />
              <GoalList />
            </div>
    );
  }
}
