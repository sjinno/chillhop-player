import { FC } from "react";
import SongInfo from "./SongInfo";
import Player from "./Player";
import { Song } from '../data/musicData';

interface Props {
    audioRef: React.MutableRefObject<HTMLAudioElement | null>,
    songs: Song[],
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>,
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    openLib: boolean,
    setOpenLib: React.Dispatch<React.SetStateAction<boolean>>,
    numOfSongs: number,
    currentTime: number,
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>,
    duration: number,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
}

const Card: FC<Props> = ({ audioRef, songs, setSongs, currentSong, setCurrentSong, openLib, setOpenLib, numOfSongs, currentTime, setCurrentTime, duration, isPlaying, setIsPlaying }: Props): JSX.Element => {
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
                    audioRef={audioRef}
                    songs={songs}
                    setSongs={setSongs}
                    currentSong={currentSong}
                    setCurrentSong={setCurrentSong}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    numOfSongs={numOfSongs}
                    currentTime={currentTime}
                    setCurrentTime={setCurrentTime}
                    duration={duration}
                />
            </div>
        </div>
    );
};

export default Card;