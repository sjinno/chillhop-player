import { FC, useState } from "react";
import SongInfo from "./SongInfo";
import Player from "./Player";
import { Song } from '../data/musicData';

interface Props {
    songs: Song[],
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>,
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    openLib: boolean,
    setOpenLib: React.Dispatch<React.SetStateAction<boolean>>,
    numOfSongs: number,
}

const Card: FC<Props> = ({ songs, setSongs, currentSong, setCurrentSong, openLib, setOpenLib, numOfSongs }: Props): JSX.Element => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="card">
            <div className="card__top">
                <SongInfo
                    currentSong={currentSong}
                    openLib={openLib}
                    setOpenLib={setOpenLib}
                />
            </div>
            <div className="card__bottom">
                <Player
                    songs={songs}
                    setSongs={setSongs}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    numOfSongs={numOfSongs}
                />
            </div>
        </div>
    );
};

export default Card;