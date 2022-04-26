import { put, takeLatest } from "redux-saga/effects"
import { joinApi, loginApi } from "../api/userApi"
import { userActions } from "../reducers/userReducer"



function* join(user){
    try{
        const response = yield joinApi(user.payload)
        yield put(userActions.joinSuccess(response))
    }catch(error){
        yield put(userActions.joinFailure(error))
    }
}

export function* watchJoin(){
    yield takeLatest(userActions.joinRequest, join)
}

function* login(login){
    try{
        const response = yield loginApi(login.payload)
        yield put(userActions.loginSuccess(response))
        window.location.href = '/'
    }catch(error){
        yield put(userActions.loginFailure(error))
    }
}

export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}