import WeatherWidget from "../components/WeatherWidget";
import SpotifyPlaylist from "../components/SpotifyPlaylist";
export default function Test() {
    return (
        <main>
            <h1 className="sm:text-4xl sm:leading-10 mg-t20 b-line">test</h1>
            <p>こんにちは、testです。</p>
            <div>
                <WeatherWidget />
            </div>
            <SpotifyPlaylist />
            <p>ただAPIをわざわざつかわなくても公式がiframe用意してるからそれでいい気がする(本末転倒)</p>
            <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/5PSEeORl3t4ythWQP50nhP?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Playlist1"
                allowFullScreen // ← ここを追加、または属性として明記
            ></iframe>
            <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/2NagUPdWpDdi6uVVzc4UOf?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allowfullscreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Spotify Playlist2"
                loading="lazy">
            </iframe>
            <h2 className="sm:text-3xl sm:leading-10">好きな曲</h2>
            <iframe
                className="mg-bt05"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/k-3y2LVF_SE?si=Y31QxQEpiwVapLDK"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <iframe
                className="mg-bt05"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/BKl4gZDWP34?si=QWWWdXjQbY9qVIqQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <iframe
                className="mg-bt05"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/FNR6C03XKn8?si=3TKJrTZPAxZEaNLE"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
            <h2 className="sm:text-3xl sm:leading-10">VR</h2>
            <video
                className="mg-bt05"
                width="100%"
                height="100%"
                src="images/100.mp4"
                controls
            ></video>
            <p>得意じゃない音ゲー</p>
        </main>
    );
}