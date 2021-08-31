import { FC } from 'react';
import { Song } from '../data/musicData';


const LibrarySong: FC<Song> = (song: Song): JSX.Element => {
    return (
        <div className="librarySong">
            <img src={song.cover} alt={song.name} />
            <div className="librarySong__description">
                <h2 className="librarySong__name">{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    );
};

export default LibrarySong;