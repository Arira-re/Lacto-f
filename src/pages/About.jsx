import { Link } from "react-router-dom";
export default function About() {
    return (
        <main>
            <h1 className="sm:text-4xl sm:leading-10 mg-t20 b-line">About</h1>
            <p>こんにちは、</p>
            <p>
                主にVRプラットフォームに存在してることが多いです。大体は
                <a target="_blank" rel="noopener noreferrer" href="https://hello.vrchat.com/">VRChat</a>
            </p>
            <p>
                よくアイコン画像の
                <a target="_blank" rel="noopener noreferrer" href="https://booth.pm/ja/items/1515902">ディゴル</a>
                でいることが多いです。
            </p>
            <p>基本的には、電子機器系技術を多く知りたいと思っているので、話題としてだしてくれると嬉しいです。</p>
            <p>手を出さないで決めつけるのは簡単。でもそれでものを語るのは危険。触れなければ理解できないこともあることを忘れてはいけない。</p>
            <h2 className="sm:text-3xl sm:leading-10">このサイトについて</h2>
            <p>Lacto-fの言葉の意味はないですが、何となくで決めました</p>
            <p>このサイトを作るうえで、とある知り合いの方にいろいろ教えてもらい、参考にさせてもらいました。その方に感謝を(名前は掲載しません)</p>
            <p><Link to="/test">test</Link>をしている場所</p>
        </main>
    );
}