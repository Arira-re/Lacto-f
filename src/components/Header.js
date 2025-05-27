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
                        src="images/logo.jpg"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'images/logo.jpg';
                        }}
                    />
                </div>
                <div id="main-text" className="flex items-center">
                    <a href="index.html">Lacto-f</a>
                </div>
            </div>
            <div id="gl_navi" className="flex items-center">
                <a className="mr-1" href="blog.html">Blog</a>
                <a className="mr-1" href="about.html">About</a>
            </div>
        </header>
    );
}