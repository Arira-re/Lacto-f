import React, { useState, useEffect } from "react";
import playlists from "../data/PlayList.json"; // プレイリスト一覧JSON
// プレイリスト検索ボックスは既存のまま残す

const SpotifyPlaylist = () => {
    const [playlistId, setPlaylistId] = useState(playlists[0]?.id ?? "");
    const [playlistData, setPlaylistData] = useState(null);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");

    // 選択または検索でプレイリスト取得
    useEffect(() => {
        if (!playlistId) return;
        setPlaylistData(null);
        setError("");
        (async () => {
            try {
                const res = await fetch(
                    `http://localhost:8000/api/spotify_playlist/?playlist_id=${playlistId}`
                );
                if (!res.ok) {
                    throw new Error("APIリクエストエラー: " + res.status);
                }
                const data = await res.json();
                setPlaylistData(data);
            } catch (e) {
                setError("プレイリスト情報の取得に失敗しました: " + e.message);
            }
        })();
    }, [playlistId]);

    // 検索ボックスで直接ID検索
    const handleSearch = (e) => {
        e.preventDefault();
        if (search.trim()) {
            setPlaylistId(search.trim());
        }
    };

    return (
        <div>
            <h2 className="sm:text-3xl sm:leading-10">Spotifyプレイリスト情報</h2>
            {/* プレイリスト選択フォーム */}
            <form
                onSubmit={e => { e.preventDefault(); if (!playlistId) setError("プレイリストを選択してください"); }}
            >
                <label className="selectbox">
                    プレイリスト:
                    <select
                        value={playlistId}
                        onChange={e => setPlaylistId(e.target.value)}
                        name="playlist"
                    >
                        {playlists.map(pl => (
                            <option value={pl.id} key={pl.id}>{pl.name}</option>
                        ))}
                    </select>
                </label>
            </form>

            {/* 既存の検索フォーム（ID直接入力） */}
            <form onSubmit={handleSearch} style={{ marginTop: "1rem" }}>
                <input
                    type="text"
                    placeholder="プレイリストIDを入力"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit">検索</button>
            </form>

            {error && <p className="error">{error}</p>}
            {playlistData ? (
                <div>
                    <h2>{playlistData.name}</h2>
                    <p>{playlistData.description}</p>
                    {playlistData.images && playlistData.images[0] && (
                        <img
                            src={playlistData.images[0].url}
                            alt={playlistData.name}
                            width="200"
                        />
                    )}
                    <ul>
                        {playlistData.tracks && playlistData.tracks.items && playlistData.tracks.items.map((item, idx) =>
                            <li key={idx}>{item.track?.name} - {item.track?.artists?.map(a => a.name).join(", ")}</li>
                        )}
                    </ul>
                </div>
            ) : !error ? (
                <p>取得中...</p>
            ) : null}
        </div>
    );
};

export default SpotifyPlaylist;