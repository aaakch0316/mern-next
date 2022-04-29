import { all } from 'redux-saga/effects'
import { watchAddBoard } from './boardSaga.js'
import { watchJoin, watchLogin, watchLogout, watchDelUser } from './useSaga.js'

export default function* rootSaga(){
    yield all([watchJoin(), watchLogin(), watchLogout(), watchDelUser(), watchAddBoard()])
}