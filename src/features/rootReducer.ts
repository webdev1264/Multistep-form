import { combineReducers } from "@reduxjs/toolkit";
import selectionReducer from "./selectionSlice";
import stepReducer from "./stepSlice";

const rootReducer = combineReducers({
  selection: selectionReducer,
  steps: stepReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;

export default rootReducer;
