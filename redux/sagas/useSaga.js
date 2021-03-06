import { put, takeLatest } from "redux-saga/effects"
import { joinApi, loginApi, logoutApi } from "../api/userApi"
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

function* logout(){
    try{
        const response = yield logoutApi()
        yield put(userActions.logoutSuccess(response))
    }catch(error){
        console.log(error)
    }
}

export function* watchLogout(){
    yield takeLatest(userActions.logoutRequest, logout)
}

function* delUser(){
    try{
        const response = yield delUserApi()
        yield put(userActions.delUserSuccess(response))
    }catch(error){
        console.log(error)
    }
}
export function* watchDelUser(){
    yield takeLatest(userActions.delUserRequest, delUser)
}

