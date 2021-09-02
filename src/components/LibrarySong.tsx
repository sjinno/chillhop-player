import { FC } from 'react';
import { Song } from '../data/musicData';

interface Props {
    songs: Song[],
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>,
    song: Song,
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
}

const LibrarySong: FC<Props> = ({ songs, setSongs, song, currentSong, setCurrentSong }: Props): JSX.Element => {
    const selectSongHandler = () => {
        const updatedSongs = () => {
            songs[currentSong.index].active = false;
            songs[song.index].active = true;
            return songs;
        };
        setSongs(updatedSongs);
        setCurrentSong(songs[song.index]);
    };

    return (
        <div
            onClick={selectSongHandler}
            className={`librarySong ${song.active ? 'librarySong--active' : ''}`}
        >
            <div className="librarySong__img">
                <img src={song.cover} alt={song.name} />
            </div>
            <div className="librarySong__description">
                <h2 className="librarySong__name">{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    );
};

export default LibrarySong;