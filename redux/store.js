import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './sagas/index.js'
import rootReducer from './reducers/index.js'

const isDev = process.env.NODE_ENV === 'development'

const sagaMiddleware = createSagaMiddleware()

const createStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [sagaMiddleware]
    })
    sagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(createStore, {debug: isDev})