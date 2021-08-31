import React, { FC, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { Song } from '../data/musicData';

interface Props {
    data: Song[],
    currentSong: Song,
    setCurrentSong: React.Dispatch<React.SetStateAction<Song>>,
    audio: string,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    songIdx: number,
    setSongIdx: React.Dispatch<React.SetStateAction<number>>,
    maxDataIdx: number,
}

const Player: FC<Props> = (props: Props): JSX.Element => {
    // State
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Ref
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // EVENT HANDLERS ==========
    // Play song
    const playSongHandler = () => {
        // console.log(audioRef.current);
        if (audioRef.current) {
            if (props.isPlaying) {
                audioRef.current.pause();
                props.setIsPlaying(false);
            } else {
                audioRef.current.play();
                props.setIsPlaying(true);
            }
        }
    };

    const timeUpdatedHandler = (evt: React.ChangeEvent<HTMLAudioElement>) => {
        // console.log(evt);
        // console.log(evt.target.currentTime);
        const sec = evt.target.currentTime;
        setCurrentTime(sec);
    };

    const initialSongMetaDataHandler = (evt: React.ChangeEvent<HTMLAudioElement>) => {
        // console.log(evt.target.duration);
        const sec = evt.target.duration;
        setDuration(sec);
    };

    const dragHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
        // console.log(evt.target.value);
        const value = parseInt(evt.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
        setCurrentTime(value);
    };

    const skipForwardHandler = () => {
        const next = props.songIdx + 1;
        next === props.maxDataIdx ? props.setSongIdx(0) : props.setSongIdx(next);
        props.setCurrentSong(props.data[props.songIdx]);
        // console.log(props.songIdx);
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
                <FontAwesomeIcon className="player__control__skip-back" size="2x" icon={faLessThan} />
                <FontAwesomeIcon
                    onClick={playSongHandler}
                    className="player__control__play"
                    size="3x"
                    icon={props.isPlaying ? faPauseCircle : faPlayCircle}
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
                    src={props.audio}>
                </audio>
            </div>
        </div>
    );
};

export default Player;