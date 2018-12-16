import { takeEvery, put } from 'redux-saga/effects';
import { 
	GET_INIT_LIST
} from './actionTypes';
import axios from 'axios';
import { 
  initListAction
} from './actionCreators';

/**
 * generator function
 * @param {[type]} 
 * @yield {[type]} [description]
 */
function* getInitList() {
	try{
		const res = yield axios.get('/api/list.json');
		const action = initListAction(res.data);
		yield put(action);
	}catch(e){
		console.log("ajax request failed");
	}
}

function* mySaga() {
   yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;