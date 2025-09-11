import { useParams } from 'react-router-dom';
import { type ReactElement } from 'react';

const PostDetailsPage = (): ReactElement => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <h1>Детальная страница поста: {id}</h1>
            <p>Здесь будет полный текст поста, автор и комментарии для поста с ID: {id}.</p>
        </div>
    );
};

export default PostDetailsPage;