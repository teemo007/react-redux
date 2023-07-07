import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [
    {id:'0', name: 'jennie Kim'},
    {id:'1', name: 'lisa'},
    {id:'2', name: 'jisoo'},
    {id:'3', name: 'rose'},

]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;