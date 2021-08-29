import { FC, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan, faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    audio: string,
    isPlaying: boolean,
    setIsPlaying: any,
}

const Player: FC<Props> = ({ audio, isPlaying, setIsPlaying }) => {
    // State
    const [playButton, setPlayButton] = useState(faPlayCircle);

    // Ref
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // EVENT HANDLERS ==========
    // Play song
    const playSongHandler = () => {
        // console.log(audioRef.current);
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
                setPlayButton(faPlayCircle);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
                setPlayButton(faPauseCircle);
            }
        }
    };

    return (
        <div className="player">
            <div className="player__time-control">
                <p>Start Time</p>
                <input type="range" name="" id="" />
                <p>End Time</p>
            </div>
            <div className="player__control">
                <FontAwesomeIcon className="player__control__skip-back" size="2x" icon={faLessThan} />
                <FontAwesomeIcon onClick={playSongHandler} className="player__control__play" size="3x" icon={playButton} />
                <FontAwesomeIcon className="player__control__skip-forward" size="2x" icon={faGreaterThan} />
                <audio ref={audioRef} src={audio}></audio>
            </div>
        </div>
    );
};

export default Player;