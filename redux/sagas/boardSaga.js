import { put, takeLatest } from "redux-saga/effects"
import { addBoardApi, delBoardApi, updateBoardApi } from "../api/boardApi.js"
import { boardActions } from "../reducers/boardReducer"
import Router from 'next/router';



function* addBoard(board){
    try{
        const response = yield addBoardApi(board.payload)
        yield put(boardActions.addBoardSuccess(response))
        Router.push('/board/getArticles');
    }catch(error){
        yield put(boardActions.addBoardFailure(error))
    }
}

export function* watchAddBoard(){
    yield takeLatest(boardActions.addBoardRequest, addBoard)
}

function* delBoard(board){
    try{
        // console.log('saga 진입', board)
        const response = yield delBoardApi(board.payload)
        yield put(boardActions.delBoardSuccess(response))
    }catch(error){
        yield put(boardActions.delBoardFailure(error))
    }
}

export function* watchDelBoard(){
    yield takeLatest(boardActions.delBoardRequest, delBoard)
}

function* updateBoard(board){
    try{
        // console.log('saga 진입', board)
        const response = yield updateBoardApi(board.payload)
        yield put(boardActions.updateBoardSuccess(response))
        Router.push('/board/getArticles');
    }catch(error){
        yield put(boardActions.updateBoardFailure(error))
    }
}

export function* watchUpdateBoard(){
    yield takeLatest(boardActions.updateBoardRequest, updateBoard)
}