import { createSlice } from "@reduxjs/toolkit";
import { InitialStepInterface } from "../types/interfaces";

const initialStep: InitialStepInterface = {
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
