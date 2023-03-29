import { createSlice, createAction, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'abc',
  initialState,
  reducers: {
    funcIncrement: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    funcDecrement: (state) => {
      state.value -= 1
    },
    funcIncrementByAmount: (state, action: PayloadAction<number>) => {
      console.log("PAyload ==== " + JSON.stringify(action))
      state.value += action.payload
    },
  },
})

export const clapForStory = createAction("story/clap", (storyId) => {
  //alert(storyId.value)
  return { payload: { id: storyId } };
});

// Action creators are generated for each case reducer function


const { actions, reducer } = counterSlice
export const { funcIncrement, funcDecrement, funcIncrementByAmount } = actions;
export default reducer;

// Short Format of above three lines

// export const { funcIncrement, funcDecrement, funcIncrementByAmount } = counterSlice.actions
// export default  counterSlice.reducer
