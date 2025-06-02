import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center justify-between">
                <div className="mr-1">
                    <img
                        alt="logo"
                        width="48"
                        height="48"
                        className="rounded-full flex items-center"
                        src="/images/logo.jpg"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = '/images/logo.jpg';
                        }}
                    />
                </div>
                <div id="main-text" className="flex items-center">
                    <Link to="/">Lacto-f</Link>
                </div>
            </div>
            <div id="gl_navi" className="flex items-center">
                <Link className="mr-1" to="/blog">Blog</Link>
                <Link className="mr-1" to="/about">About</Link>
            </div>
        </header>
    );
}