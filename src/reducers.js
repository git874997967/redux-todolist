/*reducer is method only  
input old data and action 
out put the new data and state*/
import {
	combineReducers
} from 'redux';
/*why some of them are all captialized */
import {
	ADD_TODO,
	COMPLETE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions';
const {
	SHOW_ALL
} = VisibilityFilters;
//filter response
const visibilityFilter = (state = SHOW_ALL, action) => {
		switch (action.type) {
			case SET_VISIBILITY_FILTER:
			return action.filter;
			default:
				return state;
		}
	}
	//need todo response
const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, {
				text: action.text,
				completed: false
			}];
		case COMPLETE_TODO:
			return [...state.slice(0, action.index),
				Object.assign({}, state[action.index], {
					completed: true
				}),
			 ...state.slice(action.index + 1)
      ];
			default:return state;

	}
}
// 不同响应合并成一个reducer
const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp;
