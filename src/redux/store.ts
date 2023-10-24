"use client";
import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
  counter: counterReducer,
  //add all your reducers here
},);

export const store = configureStore({
  reducer: rootReducer,

 });