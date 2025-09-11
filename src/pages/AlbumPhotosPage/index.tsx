import { useParams } from 'react-router-dom';
import { type ReactElement } from 'react';

const AlbumPhotosPage = (): ReactElement => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <h1>Фотографии альбома: {id}</h1>
            <p>Здесь будет сетка фотографий для альбома с ID: {id}.</p>
        </div>
    );
};

export default AlbumPhotosPage;