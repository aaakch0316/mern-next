import { all } from 'redux-saga/effects'
import { watchJoin } from './useSaga.js'

export default function* rootSaga(){
    yield all([watchJoin()])
}