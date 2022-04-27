import { all } from 'redux-saga/effects'
import { watchJoin, watchLogin, watchLogout } from './useSaga.js'

export default function* rootSaga(){
    yield all([watchJoin(), watchLogin(), watchLogout()])
}