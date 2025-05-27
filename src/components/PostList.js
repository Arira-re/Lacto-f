import posts from '../data/posts';
export default function PostList() {
    return (
        <div>
            {posts.map((post, index) => (
                <article key={index} className="mg-bt05">
                    <a className="wf" href={post.href} rel="bookmark" title={post.title}>
                        <p className="mg-b0">
                            <span className="post_time">{post.date}</span>
                            <span className="tag-name">{post.tag}</span>
                        </p>
                        <h4 className="sm:text-3xl sm:leading-10">{post.title}</h4>
                    </a>
                    <p className="text-main mg-t05">{post.description}</p>
                </article>
            ))}
        </div>
    );
}