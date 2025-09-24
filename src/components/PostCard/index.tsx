import CustomButton from "@components/CustomButton";
import { useNavigate } from "react-router-dom";
import { type IPost } from "@appTypes/index";
import { paths } from "@routes/routes";
import "./style.css";

interface IPostCardProps {
    post: IPost;
    authorName: string;
}

const PostCard = ({ post, authorName }: IPostCardProps) => {
    const navigate = useNavigate();

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
                Author: {authorName}
            </p>
            <p className="post-card-body secondary-text">{shortBody}</p>
            <CustomButton
                onClick={handleOpenPost}
                className="open-post-button nav-button"
                label="Open"
            />
        </div>
    );
};

export default PostCard;
