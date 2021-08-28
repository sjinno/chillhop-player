import { FC } from "react";
import {Song} from '../data/musicData';

const SongInfo: FC<Song> = ({name, artist, cover}) => {
    return (
        <div className="songInfo">
            <img className="songInfo__cover" src={cover} alt="cover" />
            <h2 className="songInfo__song">{name}</h2>
            <h3 className="songInfo__artist">{artist}</h3>
        </div>
    );
};

export default SongInfo;