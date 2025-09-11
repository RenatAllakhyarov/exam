export type IPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export type IUser ={
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export type IComment = {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

export type ITodo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

export type IAlbum = {
    userId: number;
    id: number;
    title: string;
}

export type IPhoto ={
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}