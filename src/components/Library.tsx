import { FC } from "react";
import LibrarySong from "./LibrarySong";
import { Song } from '../data/musicData';

interface Props {
    songs: Song[],
    openLib: boolean,
}

const Library: FC<Props> = ({ songs, openLib }: Props): JSX.Element => {
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

    return (
        <div className="library" style={ openLib ? style.open : style.close }>
            <div className="library__inner">
                <h2 className="library__title">Library</h2>
                {songs.map(song => (<LibrarySong {...song} key={song.id} />))}
            </div>
        </div>
    );
};

export default Library;