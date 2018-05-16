import { ITEM_ADDED } from '../actions/index';
import { ITEM_REMOVE } from '../actions/index';
import { GET_INIT_GOALS } from '../actions/index';


export default function(state = [], action) {

switch(action.type) {

  case GET_INIT_GOALS : {
    return action.payload;
  }

  case ITEM_ADDED : {
  console.log( 'item add action arrived at reducer');
  let updatedGoals = [action.payload, ...state];
  localStorage.goals = JSON.stringify(updatedGoals);
  return updatedGoals;
}

case ITEM_REMOVE : {
  console.log( 'item remove action arrived at reducer');
  console.log( 'State:');
  console.dir(state);
  console.log( 'Payload:' + action.payload);

  let filteredGoals =  state.filter((goal) => {
    if(goal.id !== action.payload) {

      return goal;
    }
  });

  localStorage.goals = JSON.stringify(filteredGoals);
  return filteredGoals;
}



}
  return state;


}
