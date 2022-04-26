import { createSlice } from '@reduxjs/toolkit';


// export interface UserType{
//     userid: String;
//     password: String;
//     email: String;
//     name: String;
//     phone: String;
//     birth: String;
//     address: String;
// }

// export interface UserState{
//     loading: boolean;
//     data: UserType[];
//     error: any; 
// }


// const userState = {
//     userid: '',
//     password: '',
//     email: '',
//     name: '',
//     phone: '',
//     birth: '',
//     address: '',
// }

const initialState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest: (state, payload) => {
            alert('진행 2')
            state.loading = true;
        },
        joinSuccess: (state, {payload}) => {
            state.data = [...state.data, payload]
            state.loading = false;
        },
        joinFailure: (state, {payload}) => {
            state.data = payload;
            state.loading = false;
        },

        loginRequest: (state, {payload}) => {
            state.loading = true;
        },
        loginSuccess: (state, {payload}) => {
            state.loading = true;
            state.data = [...state.data, payload]
        },
        loginFailure: (state, {payload}) => {
            state.loading = true;
            state.data = payload;
        },
    }
})

const { reducer, actions } = userSlice;
export const userActions = actions;
export default reducer;