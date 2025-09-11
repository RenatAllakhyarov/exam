import { useUsersCache } from "../../context/UserCacheContext";
import { useNavigate } from "react-router-dom";
import { type ReactElement } from "react";
import { paths } from "../../routes/routes";
import { type IPost } from "../../types";
import "./style.css";

interface IPostCardProps {
    post: IPost;
}

const PostCard = ({ post }: IPostCardProps): ReactElement => {
    const navigate = useNavigate();
    const { getUserNameById } = useUsersCache();

    const authorName = getUserNameById(post.userId);

    const handleOpenPost = () => {
        navigate(`${paths.PostsPage.path}/${post.id}`);
    };

    const shortBody =
        post.body.length > 100
            ? post.body.substring(0, 100) + "..."
            : post.body;

    return (
        <div className="post-card">
            <h3 className="post-card-title title-text">{post.title}</h3>
            <p className="post-card-author secondary-text">
                Автор: {authorName}
            </p>
            <p className="post-card-body secondary-text">{shortBody}</p>
            <button
                onClick={handleOpenPost}
                className="open-post-button nav-button"
            >
                Открыть
            </button>
        </div>
    );
};

export default PostCard;
