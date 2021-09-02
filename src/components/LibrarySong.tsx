import { FC } from 'react';
import { Song } from '../data/musicData';

interface Props {
    songs: Song[],
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>,
    song: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
}

const LibrarySong: FC<Props> = ({ songs, setSongs, song, setCurrentSong }: Props): JSX.Element => {
    const selectSongHandler = () => {
        setCurrentSong(songs[song.index]);
    };

    return (
        <div
            onClick={selectSongHandler}
            className="librarySong"
        >
            <img src={song.cover} alt={song.name} />
            <div className="librarySong__description">
                <h2 className="librarySong__name">{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    );
};

export default LibrarySong;