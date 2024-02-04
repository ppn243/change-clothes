import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [
    {
      id: "topcloth_1",
      type: "topclothes",
      name: "Top Cloth 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/topcloth1_show.jpg",
      imgSrc_png: "../assets/images/clothes/topcloth1.png",
    },
    {
      id: "botcloth_1",
      type: "botclothes",
      name: "Bot Cloth 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/clothes/botcloth1_show.jpg",
      imgSrc_png: "../assets/images/clothes/botcloth1.png",
    },
    {
      id: "shoes_1",
      type: "shoes",
      name: "Shoes 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/shoes/shoes1_show.jpg",
      imgSrc_png: "../assets/images/shoes/shoes1.png",
    },
    {
      id: "handbag_1",
      type: "handbags",
      name: "Handbag 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/handbags/handbag1_show.jpg",
      imgSrc_png: "../assets/images/handbags/handbag1.png",
    },
    {
      id: "necklace_1",
      type: "necklaces",
      name: "Necklace 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/necklaces/necklace1_show.jpg",
      imgSrc_png: "../assets/images/necklaces/necklace1.png",
    },
    {
      id: "hairstyle_1",
      type: "hairstyle",
      name: "Hairstyle 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/hairstyle/hairstyle1_show.jpg",
      imgSrc_png: "../assets/images/hairstyle/hairstyle1.png",
    },
    {
      id: "background_1",
      type: "background",
      name: "Background 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, nulla.",
      imgSrc_jpg: "../assets/images/background/background1_show.jpg",
      imgSrc_png: "../assets/images/background/background1.jpg",
    },
  ],
};
export const changeClothesReducer = createSlice({
  name: "changeClothes",
  initialState,
  reducers: {
    changeClothes: (state, action) => {
      const { id, type, imgSrc_jpg } = action.payload;
      console.log(type);
      const itemIndex = state.clothes.findIndex((item) => item.id === id);
      console.log(itemIndex);
      if (itemIndex !== -1 && state.clothes[itemIndex].type === type) {
        // Tìm thấy item và type trùng khớp
        state.clothes[itemIndex].imgSrc_jpg = imgSrc_jpg;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeClothes } = changeClothesReducer.actions;

export default changeClothesReducer.reducer;
