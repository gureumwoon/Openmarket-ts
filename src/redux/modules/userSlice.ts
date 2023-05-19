import { apis } from "../../shared/api";
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface UserType {
    user: string | null;
    isLogin: boolean;
}

interface UserLoginType {
    username: string;
    password: string;
    login_type: string;
}

const initialState: UserType = {
    user: null,
    isLogin: false,
}

export const signInUser: any = createAsyncThunk<{}, UserLoginType>(
    "user/signIn",
    async (data: UserLoginType, thunkAPI) => {
        try {
            const res = await apis.signIn(data);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("type", res.data.user_type);
            localStorage.setItem("id", res.data.id);
            window.alert(`환영합니다 ${data.username}님 :)`)
            window.location.assign("/")
            console.log(res.data)
            return thunkAPI.fulfillWithValue(res.data);;
        } catch (error: any) {
            window.alert(error.response.data.FAIL_Message)
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signInUser.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isLogin = true;
            })
    }
});

export default userSlice.reducer;

