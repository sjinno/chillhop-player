import { useState } from "react";
import SongInfo from "./SongInfo";
import Player from "./Player";
import getMusicData from '../data/musicData';

const Card = () => {
    const [data, setData] = useState(getMusicData());
    const [currentSong, setCurrentSong] = useState(data[0]);

    return (
        <div className="card">
            <div className="card__top">
                <SongInfo />
            </div>
            <div className="card__bottom">
                <Player />
            </div>
        </div>
    );
};

export default Card;