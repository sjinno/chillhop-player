import { FC } from "react";
import LibrarySong from "./LibrarySong";
import { Song } from '../data/musicData';

interface Props {
    data: Song[],
}

const Library: FC<Props> = (data): JSX.Element => {
    // console.log(data);

    return (
        <div>
            {data.data.map(song => (<LibrarySong {...song} key={song.id} />))}
        </div>
    );
};

export default Library;