import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ProductCartUpdate {
  name: string;
  diff: number;
}

const initialState: Record<string, number> = {};

export const productCartSlice = createSlice({
  name: "productCart",
  initialState,
  reducers: {
    update: (state, payload: PayloadAction<ProductCartUpdate>) => {
      const { diff, name } = payload.payload;
      state[name] |= 0;
      state[name] += diff;
    },
    reset: (state, payload: PayloadAction<string>) => {
      const name = payload.payload;
      state[name] = 0;
    },
  },
});

export const { reset, update } = productCartSlice.actions;
export const selectProductCart = (name: string) => (state: RootState) =>
  state.productCart[name] || 0;
export const productCartReducer = productCartSlice.reducer;
