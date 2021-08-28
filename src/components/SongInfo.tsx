import { FC } from "react";
import {Song} from '../data/musicData';

const SongInfo: FC<Song> = (currentSong): JSX.Element => {
    return (
        <div className="songInfo">
            <img className="songInfo__cover" src={currentSong.cover} alt="cover" />
            <h2 className="songInfo__song">{currentSong.name}</h2>
            <h3 className="songInfo__artist">{currentSong.artist}</h3>
        </div>
    );
};

export default SongInfo;