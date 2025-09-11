import { useParams } from 'react-router-dom';
import { type ReactElement } from 'react';

const UserProfilePage = (): ReactElement => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <h1>Профиль пользователя: {id}</h1>
            <p>Здесь будет информация о пользователе и его посты/задачи для пользователя с ID: {id}.</p>
        </div>
    );
};

export default UserProfilePage;