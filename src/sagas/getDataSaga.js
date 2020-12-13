import { put, takeLatest} from 'redux-saga/effects'

export default function* sagaWatcher() {
    yield takeLatest('ADD_ITEM_FOR_WATCHER', sagaWorker)
}

function* sagaWorker(item) {
    yield put ({type:"ADD_ITEM",payload: item.payload});
}

/*
export const getDataAction = () => {
    return (dispatch => {
        fetch('https://jsonplaceholder.typicode.com/todos?limit=10')
        .then(response => response.json())
        .then(data =>  dispatch({type:'GET_DATA_ASYNC', payload: data}) )
    })
}
*/