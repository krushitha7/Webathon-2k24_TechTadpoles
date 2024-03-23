//create redux slice
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

//make http req using redux-thunk middleware
export const userLoginThunk = createAsyncThunk('user-login', async (userCredObj, thunkApi) => {
    try {

        const res = await axios.post(
            'http://localhost:4000/user-api/login',
            userCredObj)
        if (res.data.message === 'login success') {
            //store token in local or session storage
            localStorage.setItem('token', res.data.token)

            //return data

        } else {
            return thunkApi.rejectWithValue(res.data.message)
        }
        return res.data



    } catch (err) {
        return thunkApi.rejectWithValue(err)
    }
})

export const userSlice = createSlice({
    name: 'user-login',
    initialState: {
        isPending: false,
        loginUserStatus: false,
        currentUser: {},
        errorOccured: false,
        errMsg: ''
    },
    reducers: {
        resetState: (state, action) => {
            state.isPending = false;
            state.currentUser = {};
            state.loginUserStatus = false;
            state.errorOccured = false
            state.errMsg = ''
        }
    },
    extraReducers: builder => builder
        .addCase(userLoginThunk.pending, (state, action) => {
            state.isPending = true
            // console.log(action)
        })
        .addCase(userLoginThunk.fulfilled, (state, action) => {
            state.isPending = false
            state.currentUser = action.payload.user
            state.loginUserStatus = true
            state.errMsg = ''
            state.errorOccured = false
        })
        .addCase(userLoginThunk.rejected, (state, action) => {
            state.isPending = false
            state.currentUser = {}
            state.loginUserStatus = false
            state.errMsg = action.payload
            state.errorOccured = true
        })
})


//export action creator functions
export const { resetState } = userSlice.actions
//export root reducer of this state
export default userSlice.reducer