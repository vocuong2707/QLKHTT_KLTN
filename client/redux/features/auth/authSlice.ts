import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    token: "",
    user: "",
    };

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers: {
        userRegistration: (state,action : PayloadAction<{token: string}>) => {
        state.token = action.payload.token;
    },
        userLoggedIn: (state,action: PayloadAction<{accesstoken:string, user:string}>) => {
            state.token = action.payload.accesstoken;
            state.user = action.payload.user;
        },
        userLoggedOut: (state) =>{
            state.token = "";
            state.user = "";
        },
    }
}
)
export const {userRegistration, userLoggedIn, userLoggedOut} = authSlice.actions;

export default authSlice.reducer;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// // Kiểm tra và lấy dữ liệu từ localStorage (nếu có)
// const savedToken = localStorage.getItem("token");
// const savedUser = localStorage.getItem("user");

// const initialState = {
//   token: savedToken || "", // Lấy token từ localStorage nếu có
//   user: savedUser ? JSON.parse(savedUser) : "", // Lấy user từ localStorage nếu có
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     userRegistration: (state, action: PayloadAction<{ token: string }>) => {
//       state.token = action.payload.token;
//       // Lưu token vào localStorage
//     //   localStorage.setItem("token", action.payload.token);
//     },
//     userLoggedIn: (state, action: PayloadAction<{ accesstoken: string; user: string }>) => {
//       state.token = action.payload.accesstoken;
//       state.user = action.payload.user;
//       // Lưu token và user vào localStorage
//     //   localStorage.setItem("token", action.payload.accesstoken);
//     //   localStorage.setItem("user", JSON.stringify(action.payload.user));
//     },
//     userLoggedOut: (state) => {
//       state.token = "";
//       state.user = "";
//       // Xóa token và user khỏi localStorage
//     //   localStorage.removeItem("token");
//     //   localStorage.removeItem("user");
//     },
//   },
// });

// export const { userRegistration, userLoggedIn, userLoggedOut } = authSlice.actions;

// export default authSlice.reducer;
