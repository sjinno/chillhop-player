import { FC, useState } from "react";
import SongInfo from "./SongInfo";
import Player from "./Player";
import { Song } from '../data/musicData';

interface Props {
    currentSong: Song,
    openLib: boolean,
    setOpenLib: React.Dispatch<React.SetStateAction<boolean>>,
}

const Card: FC<Props> = ({ currentSong, openLib, setOpenLib }: Props): JSX.Element => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="card">
            <div className="card__top">
                <SongInfo currentSong={currentSong} openLib={openLib} setOpenLib={setOpenLib} />
            </div>
            <div className="card__bottom">
                <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} {...currentSong} />
            </div>
        </div>
    );
};

export default Card;