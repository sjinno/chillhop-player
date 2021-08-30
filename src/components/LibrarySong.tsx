import { FC } from 'react';
import { Song } from '../data/musicData';


const LibrarySong: FC<Song> = (song): JSX.Element => {
    return (
        <div>
            <h1>{song.artist}</h1>
            <h2>{song.name}</h2>
        </div>
    );
};

export default LibrarySong;