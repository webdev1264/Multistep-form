import { createSlice } from "@reduxjs/toolkit";

const initialSelection = {
  planId: 1,
  addonIds: [1],
};

const selectionSlice = createSlice({
  name: "select",
  initialState: initialSelection,
  reducers: {
    changePlan(state, action) {
      state.planId = action.payload;
    },
    addAddon(state, action) {
      state.addonIds.push(action.payload);
    },
    removeAddon(state, action) {
      state.addonIds = state.addonIds.filter(
        (addonId) => addonId !== action.payload
      );
    },
  },
});

export const { changePlan, addAddon, removeAddon } = selectionSlice.actions;

export default selectionSlice.reducer;
