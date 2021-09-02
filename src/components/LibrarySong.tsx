import { FC } from 'react';
import { Song } from '../data/musicData';

interface Props {
    audioRef: React.MutableRefObject<HTMLAudioElement | null>,
    songs: Song[],
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>,
    song: Song,
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    isPlaying: boolean
}

const LibrarySong: FC<Props> = ({ audioRef, songs, setSongs, song, currentSong, setCurrentSong, isPlaying }: Props): JSX.Element => {
    const selectSongHandler = () => {
        const updatedSongs = () => {
            songs[currentSong.index].active = false;
            songs[song.index].active = true;
            return songs;
        };
        setSongs(updatedSongs);
        setCurrentSong(songs[song.index]);
        console.log(isPlaying);
        if (isPlaying) {
            if (audioRef.current) {
                audioRef.current.play().then(() => {
                    audioRef.current?.play();
                });
            }
        }
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