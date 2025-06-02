import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="mg-t20">
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>お探しのページは見つかりませんでした<br />もしくはページが作られてないからかも…</p>
            <Link to="/">HOME</Link>
        </main>
    );
}