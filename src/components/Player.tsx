import { FC, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan, faGreaterThan, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
    audio: string,
    isPlaying: boolean,
    setIsPlaying: any,
}

const Player: FC<Props> = ({audio, isPlaying, setIsPlaying}) => {
    // Ref
    const audioRef = useRef<HTMLAudioElement>(null);

    // EVENT HANDLERS ==========
    // Play song
    const playSongHandler = () => {
        // console.log(audioRef.current);
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

    return (
        <div className="player">
            <div className="player__time-control">
                <p>Start Time</p>
                <input type="range" name="" id="" />
                <p>End Time</p>
            </div>
            <div className="player__control">
                <FontAwesomeIcon className="player__control__skip-back" size="2x" icon={faLessThan} />
                <FontAwesomeIcon onClick={playSongHandler} className="player__control__play" size="3x" icon={faPlayCircle} />
                <FontAwesomeIcon className="player__control__skip-forward" size="2x" icon={faGreaterThan} />
                <audio ref={audioRef} src={audio}></audio>
            </div>
        </div>
    );
};

export default Player;