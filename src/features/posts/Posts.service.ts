import { HttpMethods } from '../../common/Http';
import { RestApi, RestRequest, RestResponse } from '../../infrastructure/RestApi';

const client = new RestApi('http://localhost:3000');

export const PostsService = {
    CreatePost: async (title: string, content: string): Promise<RestResponse> => {
        const request = new RestRequest({
            method: HttpMethods.Post,
            endpoint: '/posts',
            body: { title, content },
        });

        return await client.ExecuteRequest(request);
    },

    ListPosts: async (): Promise<RestResponse> => {
        const request = new RestRequest({
            method: HttpMethods.Get,
            endpoint: '/posts',
        });

        return await client.ExecuteRequest(request);
    },
} as const;
