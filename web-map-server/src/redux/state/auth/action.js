// export const login = (username, password) => {
//     // Thực hiện logic đăng nhập, gửi request đến server, xử lý token,...
//     // Trả về một action có type và payload (thông tin người dùng,...)
//     return {
//       type: 'LOGIN',
//       payload: {
//         username,
//         // Thông tin người dùng khác (nếu cần)
//       },
//     };
//   };
//   export const logout = () => {
//     // Thực hiện logic đăng xuất, xóa token,...
//     return {
//       type: 'LOGOUT',
//     };
//   };

/* eslint-disable no-mixed-operators */
import { createAction } from "@reduxjs/toolkit";

export const login = createAction('auth/login');
export const logout = createAction('auth/logout');