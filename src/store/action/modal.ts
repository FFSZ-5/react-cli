// 创建计数器切片slice
// 导入创建切片的函数

import { createSlice } from "@reduxjs/toolkit";

export interface ModalType {
  loginModal: {
    isShow: boolean;
  };
  [key: string]: any;
}
// 定义初始化状态
const initialState: ModalType = {
  loginModal: { isShow: false },
};
// 创建切片
const modalSlice = createSlice({
  // 切片名称
  name: "modal",
  // 初始化状态
  initialState,
  // 定义处理器
  reducers: {
    // 处理加法
    setVisible: (state: ModalType, action) => {
      state[action.payload.type].isShow = action.payload.value;
    },
  },
});

// 导出动作
export const { setVisible } = modalSlice.actions;
// 导出处理器
export default modalSlice.reducer;
