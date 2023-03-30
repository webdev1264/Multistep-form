import { combineReducers } from "@reduxjs/toolkit";
import selectionReducer from "./selectionSlice";
import stepReducer from "./stepSlice";

export default combineReducers({
  selection: selectionReducer,
  steps: stepReducer,
});
