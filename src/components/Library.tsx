import React, { FC } from "react";
import LibrarySong from "./LibrarySong";
import { Song } from '../data/musicData';

interface Props {
    audioRef: React.MutableRefObject<HTMLAudioElement | null>,
    songs: Song[],
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>,
    openLib: boolean,
    setOpenLib: React.Dispatch<React.SetStateAction<boolean>>,
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    isPlaying: boolean,
}

const Library: FC<Props> = ({ audioRef, songs, setSongs, openLib, setOpenLib, currentSong, setCurrentSong, isPlaying }: Props): JSX.Element => {
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
            <div className="library__inner">
                <div className="library__inner__header">
                    <h2 className="library__title">Library</h2>
                    <span onClick={closeLibHandler} className="library__close">&times;</span>
                </div>
                {songs.map(song => (
                    <LibrarySong
                        audioRef={audioRef}
                        songs={songs}
                        setSongs={setSongs}
                        song={song}
                        currentSong={currentSong}
                        setCurrentSong={setCurrentSong}
                        isPlaying={isPlaying}
                        key={song.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default Library;