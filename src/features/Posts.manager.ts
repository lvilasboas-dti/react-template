import { HttpStatus } from '../common/Http';
import { PostsService } from './posts/Posts.service';
import { Post } from './posts/models/Post';

export const PostsManager = {
    CreatePost: async (title: string, content: string): Promise<Post | null> => {
        const response = await PostsService.CreatePost(title, content);

        if (response.error || response.status !== HttpStatus.Created) return null;

        return Post.Make(response.body);
    },

    ListPosts: async (): Promise<Array<Post> | null> => {
        const response = await PostsService.ListPosts();

        if (response.error) return null;

        return response.body.map((p: any) => Post.Make(p));
    },
} as const;
