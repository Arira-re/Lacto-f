export default function Footer() {
    return (
        <footer>
            <div className="sp flex flex-col items-center">
                <div className="container mx-auto px-5 py-6 top-line">
                    <div className="-mx-4 -mb-10 flex flex-wrap text-center">
                        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                            <h3 className="mb-3">Virtual Reality</h3>
                            <nav className="list-none mb-10">
                                <li><a target="_blank" rel="noopener noreferrer" href="404.html">VRChat</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="404.html">cluster</a></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                            <h3 className="mb-3">SNS</h3>
                            <nav className="list-none mb-10">
                                <li><a target="_blank" rel="noopener noreferrer" href="https://x.com">Twitter</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="https://discord.com/users/">Discord</a></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                            <h3 className="mb-3">Other</h3>
                            <nav className="list-none mb-10">
                                <li><a target="_blank" rel="noopener noreferrer" href="message.html">メールを送る</a></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="404.html">ほしいものリスト</a></li>
                            </nav>
                        </div>
                        <div className="w-full px-4 sm:w-1/2 lg:w-1/4">
                            <img alt="footer-gl" width="213" height="120" src="images/footer-gl.png" />
                        </div>
                    </div>
                </div>
            </div>
            <p id="andername">&copy; 2024 Lacto-f</p>
        </footer>
    );
}