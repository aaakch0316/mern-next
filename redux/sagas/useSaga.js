import { put, takeLatest } from "redux-saga/effects"
import { joinApi } from "../api/userApi"
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