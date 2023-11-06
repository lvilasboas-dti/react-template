import { HttpMethods } from '../../common/Http';
import { RestApi, RestRequest, RestResponse } from '../../infrastructure/RestApi';
import { store } from '../../infrastructure/Store';

const client = new RestApi('http://localhost:3000');

export const AdminService = {
    ListUsers: async (): Promise<RestResponse> => {
        const request = new RestRequest({
            method: HttpMethods.Get,
            endpoint: `/660/users`,
            headers: {
                Authorization: `Bearer ${store.getState().admin.token}`,
            },
        });

        return client.ExecuteRequest(request);
    },
} as const;
