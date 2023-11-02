import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AdminState {
    token: string | null;
}

const initialState: AdminState = {
    token: null,
};

export const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        setToken: (state, { payload }: PayloadAction<AdminState['token']>) => {
            state.token = payload;
        },
    },
});
