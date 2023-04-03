import { createSlice } from "@reduxjs/toolkit";
import { InitialStep } from "../types/interfaces";

const initialStep: InitialStep = {
  step: 1,
};

const stepSlice = createSlice({
  name: "steps",
  initialState: initialStep,
  reducers: {
    nextStep(state) {
      state.step++;
    },
    prevStep(state) {
      state.step--;
    },
    setStep(state, action) {
      state.step = action.payload;
    },
  },
});

export const { nextStep, prevStep, setStep } = stepSlice.actions;
export default stepSlice.reducer;
