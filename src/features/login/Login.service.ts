import { HttpMethods } from '../../common/Http';
import { RestApi, RestRequest, RestResponse } from '../../infrastructure/RestApi';

const client = new RestApi('http://localhost:3000');

export const LoginService = {
    Login: (email: string, password: string): Promise<RestResponse> => {
        const request = new RestRequest({
            method: HttpMethods.Post,
            endpoint: '/login',
            body: { email, password },
        });

        return client.ExecuteRequest(request);
    },
} as const;
