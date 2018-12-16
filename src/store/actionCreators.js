import { 
	CHANGE_INPUT_VALUE,
	ADD_TODO_ITEM,
	DEL_TODO_ITEM,
	INIT_LIST_ACTION,
	GET_INIT_LIST
} from './actionTypes';

export const getChangeInputValue = (value) => ({
	type: CHANGE_INPUT_VALUE,
	value
});

export const getAddTodoItemAction = () => ({
	type: ADD_TODO_ITEM
});

export const getDelItemAction = (index) => ({
	type: DEL_TODO_ITEM,
	index
});

export const initListAction = (data) => ({
	type: INIT_LIST_ACTION,
	data
})

export const getInitList = (data) => ({
	type:  GET_INIT_LIST
})
