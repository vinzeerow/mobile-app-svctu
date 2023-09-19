import { createReducer } from "@reduxjs/toolkit";
import { login, logout } from "./action";

const initialState = {
  isLoggedIn: false,
  username: null,
  // Thông tin người dùng khác (nếu cần)
};

const authReducer = createReducer(initialState, (builder) => 
  builder
    .addCase(login, (state, action) => {
      // Xử lý action Login, cập nhật trạng thái đã đăng nhập và thông tin người dùng
      state.isLoggedIn = true;
      state.username = action.payload;
    })
    .addCase(logout, (state) => {
      state.isLoggedIn = false;
      state.username = null;
    })
)
// => {
// switch (action.type) {
//   case 'LOGIN':
//     return {
//       ...state,
//       isLoggedIn: true,
//       username: action.payload.username,
//       // Cập nhật thông tin người dùng khác (nếu cần)
//     };
//   case 'LOGOUT':
//     return {
//       ...state,
//       isLoggedIn: false,
//       username: '',
//       // Xóa thông tin người dùng khác (nếu cần)
//     };
//   default:
//     return state;
// }
// };

export default authReducer;
