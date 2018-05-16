
export const ITEM_ADDED = 'ITEM_ADDED';
export const ITEM_REMOVE = 'ITEM_REMOVE';
export const GET_INIT_GOALS = 'GET_INIT_GOALS';

export function getInitialGoals() {
 let initGoals = localStorage.goals ? JSON.parse(localStorage.goals) : [];
  return {
    type: GET_INIT_GOALS,
    payload: initGoals // localStorage.goals
  };
}


export function addGoal(goal) {

if(localStorage.count) {
  localStorage.count++
} else {
  localStorage.count = 0;
}



  return {
      type: ITEM_ADDED,
      payload: {goalText: goal, id: localStorage.count}
  };
}


export function removeGoal(id) {
console.log("remove action got called");
  return {
    type: ITEM_REMOVE,
    payload: id
  };
}
