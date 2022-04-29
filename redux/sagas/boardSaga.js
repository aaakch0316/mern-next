import { put, takeLatest } from "redux-saga/effects"
import { addBoardApi, delBoardApi } from "../api/boardApi.js"
import { boardActions } from "../reducers/boardReducer"



function* addBoard(user){
    try{
        const response = yield addBoardApi(user.payload)
        yield put(boardActions.addBoardSuccess(response))
    }catch(error){
        yield put(boardActions.addBoardFailure(error))
    }
}

export function* watchAddBoard(){
    yield takeLatest(boardActions.addBoardRequest, addBoard)
}

function* delBoard(user){
    try{
        // console.log('saga 진입', user)
        const response = yield delBoardApi(user.payload)
        yield put(boardActions.delBoardSuccess(response))
    }catch(error){
        yield put(boardActions.delBoardFailure(error))
    }
}

export function* watchDelBoard(){
    yield takeLatest(boardActions.delBoardRequest, delBoard)
}