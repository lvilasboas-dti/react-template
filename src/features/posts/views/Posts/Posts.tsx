import { FC, useEffect, useState } from 'react';
import { NewPost } from '../../components/NewPost';
import { Post } from '../../models/Post';
import { PostsManager } from '../../../Posts.manager';

import styles from './Posts.module.scss';
import { PostsList } from '../../components/PostsList';

export const Posts: FC = () => {
    const [posts, setPosts] = useState<Array<Post>>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        listPosts();
    }, []);

    const listPosts = async () => {
        setLoading(true);
        setError(false);
        const result = await PostsManager.ListPosts();
        setLoading(false);

        if (!result) {
            setError(true);
            return;
        }

        setPosts(result);
    };

    const onPostAdded = (post: Post) => {
        setPosts([...posts, post]);
    };

    return (
        <div className={styles['container']}>
            <main>{loading ? <div>Loading...</div> : error ? <div>error</div> : <PostsList posts={posts} />}</main>

            <aside>
                <NewPost onPostAdded={onPostAdded} />
            </aside>
        </div>
    );
};
