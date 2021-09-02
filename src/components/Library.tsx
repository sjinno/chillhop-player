import React, { FC } from "react";
import LibrarySong from "./LibrarySong";
import { Song } from '../data/musicData';

interface Props {
    songs: Song[],
    openLib: boolean,
    setOpenLib: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    songIdx: number,
    setSongIdx: React.Dispatch<React.SetStateAction<number>>
}

const Library: FC<Props> = ({ songs, openLib, setOpenLib, setCurrentSong, songIdx, setSongIdx }: Props): JSX.Element => {
    const style = {
        open: {
            visibility: 'visible',
            opacity: '1',
            transform: 'translateX(0)',
        },
        close: {
            visibility: 'hidden',
            opacity: '0',
            transform: 'translateX(-100%)',
        }
    } as const;

    const closeLibHandler = () => {
        openLib ? setOpenLib(false) : setOpenLib(true);
    };

    return (
        <div className="library" style={ openLib ? style.open : style.close }>
            <span onClick={closeLibHandler} className="library__close">&times;</span>
            <div className="library__inner">
                <h2 className="library__title">Library</h2>
                {songs.map(song => (
                    <LibrarySong
                        songs={songs}
                        song={song}
                        setCurrentSong={setCurrentSong}
                        songIdx={songIdx}
                        setSongIdx={setSongIdx}
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;