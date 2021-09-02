import { FC } from 'react';
import { Song } from '../data/musicData';

interface Props {
    songs: Song[],
    song: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    songIdx: number,
    setSongIdx: React.Dispatch<React.SetStateAction<number>>,
}

const LibrarySong: FC<Props> = (props: Props): JSX.Element => {
    const selectSongHandler = () => {
        props.setSongIdx(props.song.index);
        props.setCurrentSong(props.songs[props.song.index]);
    };

    return (
        <div
            onClick={selectSongHandler}
            className="librarySong"
        >
            <img src={props.song.cover} alt={props.song.name} />
            <div className="librarySong__description">
                <h2 className="librarySong__name">{props.song.name}</h2>
                <h3>{props.song.artist}</h3>
            </div>
        </div>
    );
};

export default LibrarySong;