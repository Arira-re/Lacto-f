import { useParams } from "react-router-dom";
import posts from "../data/posts.json";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function BlogDetail() {
    const { id } = useParams();
    const post = posts.find((p) => p.id === id);

    const [content, setContent] = useState("");

    useEffect(() => {
        if (!post) return;
        fetch(`/blogs/${id}.md`)
            .then((res) => res.text())
            .then(setContent)
            .catch(() => setContent("記事本文の読み込みに失敗しました"));
    }, [id, post]);

    if (!post) return <div>記事が見つかりません</div>;

    return (
        <article>
            <div className="mg-t20">
                <h3>{post.date} / {post.tag}</h3>
                <h1>{post.title}</h1>
                <ReactMarkdown>{content}</ReactMarkdown>
            </div>
        </article>
    );
}