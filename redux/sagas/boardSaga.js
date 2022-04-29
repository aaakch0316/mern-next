import { put, takeLatest } from "redux-saga/effects"
import { addBoardApi } from "../api/boardApi.js"
import { userActions } from "../reducers/boardReducer"



function* addBoard(user){
    try{
        const response = yield addBoardApi(user.payload)
        yield put(userActions.addBoardSuccess(response))
    }catch(error){
        yield put(userActions.addBoardFailure(error))
    }
}

export function* watchAddBoard(){
    yield takeLatest(userActions.addBoardRequest, addBoard)
}