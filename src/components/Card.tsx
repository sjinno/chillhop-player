import { useState } from "react";
import SongInfo from "./SongInfo";
import Player from "./Player";
import getMusicData from '../data/musicData';

const Card = (): JSX.Element => {
    const [data, _setData] = useState(getMusicData());
    const [currentSong, _setCurrentSong] = useState(data[1]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="card">
            <div className="card__top">
                <SongInfo {...currentSong} />
            </div>
            <div className="card__bottom">
                <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} {...currentSong} />
            </div>
        </div>
    );
};

export default Card;