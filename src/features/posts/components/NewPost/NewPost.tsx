import { FC, useState, MouseEvent } from 'react';
import { PostsManager } from '../../../Posts.manager';
import { Post } from '../../models/Post';

import styles from './NewPost.module.scss';

interface NewPostProps {
    onPostAdded: (post: Post) => void;
}
export const NewPost: FC<NewPostProps> = ({ onPostAdded }) => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [errors, setErrors] = useState<Array<string>>([]);
    const [submitting, setSubmitting] = useState<boolean>(false);

    const validate = () => {
        let valid = true;
        const _errors = new Array<string>();

        if (title.length < 3) {
            valid = false;
            _errors.push('Title must be at least 3 characters long');
        }

        if (content.length < 5) {
            valid = false;
            _errors.push('Content must be at least 5 characters long');
        }

        setErrors(_errors);
        return valid;
    };

    const submit = async (ev: MouseEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        setErrors([]);

        if (!validate()) return;

        setSubmitting(true);
        const result = await PostsManager.CreatePost(title, content);
        setSubmitting(false);

        if (!result) {
            setErrors(['Unable to create new post']);
            return;
        }

        setTitle('');
        setContent('');
        onPostAdded(result);
    };

    const shouldRenderErrors = errors.length > 0;
    const shouldRenderLoading = submitting;
    return (
        <div className={styles['container']}>
            <form>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} disabled={submitting} />
                <textarea placeholder='Content' value={content} onChange={(e) => setContent(e.target.value)} disabled={submitting} />
                <button type='submit' onClick={submit} disabled={submitting}>
                    Submit
                </button>
            </form>

            {shouldRenderErrors && (
                <ul>
                    {errors.map((error) => (
                        <li>{error}</li>
                    ))}
                </ul>
            )}

            {shouldRenderLoading && <div>Creating post...</div>}
        </div>
    );
};
