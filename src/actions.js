 //types of actions
 /* a kind of define  in c or c++   NEVER changed*/
 export const ADD_TODO = 'ADD_TODO';
 export const COMPLETE_TODO = 'COMPLETE_TODO';
 export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';



 // first visbility filter
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL', // 全显示
  SHOW_COMPLETED: 'SHOW_COMPLETED', // 只显示完成
  SHOW_ACTIVE: 'SHOW_ACTIVE' // 只显示未完成
};

export const addTodo = text => {
  return {
    type: ADD_TODO,
    text
  }
}
 export const completeTodo = index => {
 	return {
 		type: COMPLETE_TODO,
 		index
 	}
 }
 export const setVisibilityFilter = filter => {
 	return {
 		type: SET_VISIBILITY_FILTER,
 		filter
 	}
 }