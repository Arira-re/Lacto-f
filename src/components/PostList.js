import posts from '../data/posts.json';
import { Link } from 'react-router-dom';

export default function PostList() {
    return (
        <div>
            {posts.map((post) => (
                <article key={post.id} className="mg-bt05">
                    <Link className="wf" to={post.href} rel="bookmark" title={post.title}>
                        <p className="mg-b0">
                            <span className="post_time">{post.date}</span>
                            <span className="tag-name">{post.tag}</span>
                        </p>
                        <h4 className="sm:text-3xl sm:leading-10">{post.title}</h4>
                    </Link>
                    <p className="text-main mg-t05">{post.description}</p>
                </article>
            ))}
        </div>
    );
}