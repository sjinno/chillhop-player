import { FC, useState } from "react";
import SongInfo from "./SongInfo";
import Player from "./Player";
import { Song } from '../data/musicData';

interface Props {
    data: Song[],
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    openLib: boolean,
    setOpenLib: React.Dispatch<React.SetStateAction<boolean>>,
    songIdx: number,
    setSongIdx: React.Dispatch<React.SetStateAction<number>>,
    maxDataIdx: number,
}

const Card: FC<Props> = (props: Props): JSX.Element => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="card">
            <div className="card__top">
                <SongInfo
                    currentSong={props.currentSong}
                    openLib={props.openLib}
                    setOpenLib={props.setOpenLib}
                />
            </div>
            <div className="card__bottom">
                <Player
                    data={props.data}
                    currentSong={props.currentSong}
                    setCurrentSong={props.setCurrentSong}
                    audio={props.currentSong.audio}
                    isPlaying={isPlaying}
                    setIsPlaying={setIsPlaying}
                    songIdx={props.songIdx}
                    setSongIdx={props.setSongIdx}
                    maxDataIdx={props.maxDataIdx}
                />
            </div>
        </div>
    );
};

export default Card;