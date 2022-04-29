import { combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper' 
import users from './userReducer.js'   // 연결은 없는데 자동전달된데
import boards from './boardReducer.js'

const rootReducer = (state, action) => {
    //HYDRATE의 등장은 SSR을 위한 것으로, getInitialProps와 getServerSideProps에서도 Redux store에 접근이 가능하도록 하기 위한 처리이다.
    if (action.type === HYDRATE) {  // 없는 경우 필터링
        return {
          ...state,
          ...action.payload,
        };
    }
    return combineReducers({
        users,
        boards
    })(state, action)   // (state, action) 이걸 넣어주면 즉시 실행으로 변경된다
}

export default rootReducer;