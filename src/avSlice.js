import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      img: "./assets/projector-20031_1920.jpg",
      name: "Projectors",
      cost: 200,
      quantity: 0,
    },
    {
      img: "./assets/speakers-4109274_1920.jpg",
      name: "Speaker",
      cost: 35,
      quantity: 0,
    },
    {
      img: "./assets/microphone-3926344_1920.jpg",
      name: "Microphones",
      cost: 45,
      quantity: 0,
    },
    {
      img: "./assets/whiteboard-2903269_1920.png",
      name: "Whiteboards",
      cost: 80,
      quantity: 0,
    },

    {
      img: "./assets/signpost-235079_1920.jpg",
      name: "Signage",
      cost: 80,
      quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
