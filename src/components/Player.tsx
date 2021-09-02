import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../data/musicData';

interface Props {
    audioRef: React.MutableRefObject<HTMLAudioElement | null>,
    songs: Song[],
    setSongs: React.Dispatch<React.SetStateAction<Song[]>>,
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    numOfSongs: number,
    currentTime: number,
    setCurrentTime: React.Dispatch<React.SetStateAction<number>>,
    duration: number,
}

const Player: FC<Props> = ({ audioRef, songs, setSongs, currentSong, setCurrentSong, isPlaying, setIsPlaying, numOfSongs, currentTime, setCurrentTime, duration }: Props): JSX.Element => {
    // EVENT HANDLERS ==========
    // Play song
    const playSongHandler = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    const dragHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(evt.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
        setCurrentTime(value);
    };

    // Helper function
    const updateSongs = (oldIdx: number, newIdx: number) => {
        songs[oldIdx].active = false;
        songs[newIdx].active = true;
        return songs;
    };

    const playAudio = () => {
        if (isPlaying) {
            if (audioRef.current) {
                audioRef.current.play().then(() => {
                    audioRef.current?.play();
                });
            }
        }
    };
    // ///

    const skipForwardHandler = () => {
        const next = (currentSong.index + 1) === numOfSongs ? 0 : (currentSong.index + 1);
        setCurrentSong(songs[next]);
        setSongs(updateSongs(currentSong.index, next));
        playAudio();
    };

    const skipBackHandler = () => {
        const prev = (currentSong.index - 1) === -1 ? (numOfSongs - 1) : (currentSong.index - 1);
        setCurrentSong(songs[prev]);
        setSongs(updateSongs(currentSong.index, prev));
        playAudio();
    };
    // HANDLERS END HERE ==========

    const formatTime = (sec: number): string => {
        return Math.floor(sec / 60) + ':' + ('0' + Math.floor(sec % 60)).slice(-2);
    };

    return (
        <div className="player">
            <div className="player__time-control">
                <p>{formatTime(currentTime)}</p>
                <input
                    min="0"
                    max={Math.round(duration)}
                    value={currentTime}
                    type="range"
                    name="progress"
                    id="currentTime"
                    onChange={dragHandler}
                />
                <p>{formatTime(duration)}</p>
            </div>
            <div className="player__control">
                <FontAwesomeIcon
                    onClick={skipBackHandler}
                    className="player__control__skip-back"
                    size="2x"
                    icon={faLessThan}
                />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="player__control__play"
                    size="3x"
                    icon={isPlaying ? faPauseCircle : faPlayCircle}
                />
                <FontAwesomeIcon
                    onClick={skipForwardHandler}
                    className="player__control__skip-forward"
                    size="2x"
                    icon={faGreaterThan}
                />
            </div>
        </div>
    );
};

export default Player;