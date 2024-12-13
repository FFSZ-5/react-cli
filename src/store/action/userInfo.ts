// 创建计数器切片slice
// 导入创建切片的函数

import { createSlice } from "@reduxjs/toolkit";

// 定义初始化状态
const initialState = {};
// 创建切片
const userInfoSlice = createSlice({
  // 切片名称
  name: "userInfo",
  // 初始化状态
  initialState,
  // 定义处理器
  reducers: {
    // 处理加法
    update: (state, action) => {
      state = { ...state, ...action.payload };
      return state;
    },
  },
});

// 导出动作
export const { update } = userInfoSlice.actions;
// 导出处理器
export default userInfoSlice.reducer;
