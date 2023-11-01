import { FC } from 'react';
import { Post } from '../../models/Post';

import styles from './PostsList.module.scss';

interface PostsListProps {
    posts: Array<Post>;
}
export const PostsList: FC<PostsListProps> = ({ posts }) => {
    return (
        <div className={styles['container']}>
            {posts.map(({ id, title, content }) => (
                <article key={id}>
                    <strong>{title}</strong>
                    <br />
                    <em>{content}</em>
                </article>
            ))}
        </div>
    );
};
