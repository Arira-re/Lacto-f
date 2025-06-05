import React, { useState } from "react";

const SpotifyPlaylist = () => {
    const [playlistId, setPlaylistId] = useState("");
    const [tracks, setTracks] = useState([]);
    const [playlistName, setPlaylistName] = useState("");
    const [error, setError] = useState("");

    const fetchPlaylist = async () => {
        setError("");
        setTracks([]);
        setPlaylistName("");
        if (!playlistId) {
            setError("Playlist IDを入力してください");
            return;
        }
        try {
            const res = await fetch(`http://localhost:8000/api/spotify_playlist/?playlist_id=${playlistId}`);
            if (!res.ok) throw new Error("APIリクエストエラー: " + res.status);
            const data = await res.json();
            if (data.error) throw new Error(data.error.message || "Spotify APIエラー");
            setPlaylistName(data.name);
            setTracks(data.tracks.items);
        } catch (e) {
            setError("取得失敗: " + e.message);
        }
    };

    return (
        <div>
            <h2>Spotifyプレイリストの一覧表示</h2>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    fetchPlaylist();
                }}
            >
                <input
                    type="text"
                    value={playlistId}
                    onChange={e => setPlaylistId(e.target.value)}
                    placeholder="Playlist IDを入力"
                />
                <button type="submit">取得</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {playlistName && <h3>プレイリスト: {playlistName}</h3>}
            {/* 曲一覧 */}
            <ul>
                {tracks.map((item, idx) => (
                    <li key={item.track.id || idx}>
                        {item.track.album.images[2] && (
                            <img
                                src={item.track.album.images[2].url}
                                width={32}
                                alt={item.track.name}
                                style={{ verticalAlign: "middle", marginRight: 8 }}
                            />
                        )}
                        <strong>{item.track.name}</strong> by {item.track.artists.map(a => a.name).join(", ")}
                        <a
                            href={item.track.external_urls.spotify}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: 8 }}
                        >
                            Spotifyで聴く
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpotifyPlaylist;