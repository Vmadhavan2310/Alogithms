import {configureStore} from '@reduxjs/toolkit'
import countReducer from './StateReducer'

const Store=configureStore({
  reducer:{
    count:countReducer
  }
})

export default Store;