import { FC } from "react";
import { Song } from '../data/musicData';

interface Props {
    currentSong: Song,
    openLib: boolean,
    setOpenLib: React.Dispatch<React.SetStateAction<boolean>>,
}

const SongInfo: FC<Props> = ({ currentSong, openLib, setOpenLib }: Props): JSX.Element => {
    const openLibHandler = () => {
        openLib ? setOpenLib(false) : setOpenLib(true);
    };

    return (
        <div className="songInfo">
            <img onClick={openLibHandler} className="songInfo__cover" src={currentSong.cover} alt="cover" />
            <h2 className="songInfo__song">{currentSong.name}</h2>
            <h3 className="songInfo__artist">{currentSong.artist}</h3>
        </div>
    );
};

export default SongInfo;