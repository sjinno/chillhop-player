import { FC, useState } from "react";
import SongInfo from "./SongInfo";
import Player from "./Player";
import { Song } from '../data/musicData';


const Card: FC<Song> = (currentSong): JSX.Element => {
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