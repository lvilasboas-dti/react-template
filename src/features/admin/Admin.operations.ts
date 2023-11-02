import { Dispatch } from 'redux';
import { AdminState, adminSlice } from './Admin.slice';

export const AdminOperations = {
    SetToken: (token: AdminState['token']) => (dispatch: Dispatch) => {
        dispatch(adminSlice.actions.setToken(token));
    },
} as const;
