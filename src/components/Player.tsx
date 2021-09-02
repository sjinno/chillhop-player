import React, { FC, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../data/musicData';

interface Props {
    songs: Song[],
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    numOfSongs: number,
}

const Player: FC<Props> = ({ songs, currentSong, setCurrentSong, isPlaying, setIsPlaying, numOfSongs }: Props): JSX.Element => {
    // State
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Ref
    const audioRef = useRef<HTMLAudioElement | null>(null);

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

    const timeUpdatedHandler = (evt: React.ChangeEvent<HTMLAudioElement>) => {
        const sec = evt.target.currentTime;
        setCurrentTime(sec);
    };

    const initialSongMetaDataHandler = (evt: React.ChangeEvent<HTMLAudioElement>) => {
        const sec = evt.target.duration;
        setDuration(sec);
    };

    const dragHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(evt.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
        setCurrentTime(value);
    };

    const skipForwardHandler = () => {
        const next = currentSong.index + 1;
        next === numOfSongs ? setCurrentSong(songs[0]) : setCurrentSong(songs[next]);
    };

    const skipBackHandler = () => {
        // console.log('first', songIdx);
        const prev = currentSong.index - 1;
        prev === -1 ? setCurrentSong(songs[numOfSongs - 1]) : setCurrentSong(songs[prev]);
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
                <audio
                    onTimeUpdate={timeUpdatedHandler}
                    onLoadedMetadata={initialSongMetaDataHandler}
                    ref={audioRef}
                    src={currentSong.audio}>
                </audio>
            </div>
        </div>
    );
};

export default Player;