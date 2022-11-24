import axios from 'axios'
import {createAsyncThunk,createSlice} from '@reduxjs/toolkit'

const initialState={
  loading:false,
  data:[],
  error:''
}

export const fetchUsers=createAsyncThunk('user/fetchUsers',()=>{
  return axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.data)
})
const userSlice=createSlice({
  name:'user',
  initialState,
  extraReducers:builder=>{
    builder.addCase(fetchUsers.pending,(state,action)=>{
      state.loading=true
    })
    builder.addCase(fetchUsers.fulfilled,(state,action)=>{
      state.loading=false;
      state.data=action.payload;
      state.error=''
    })
    builder.addCase(fetchUsers.rejected,(state,action)=>{
      state.error=action.error.message
    })
  }
})
export default userSlice.reducer
