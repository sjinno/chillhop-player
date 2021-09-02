import 'normalize.css';
import './styles/main.scss';

import { useState, useRef } from 'react';

import getMusicData, { Song } from './data/musicData';

import Card from './components/Card';
import Library from './components/Library';

function App(): JSX.Element {
  // Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [songs, setSongs] = useState<Song[]>(getMusicData());
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [openLib, setOpenLib] = useState<boolean>(false);
  const numOfSongs = songs.length;

  // State
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const timeUpdatedHandler = (evt: React.ChangeEvent<HTMLAudioElement>) => {
      const sec = evt.target.currentTime;
      setCurrentTime(sec);
  };

  const initialSongMetaDataHandler = (evt: React.ChangeEvent<HTMLAudioElement>) => {
      const sec = evt.target.duration;
      setDuration(sec);
  };

  return (
    <div className="App">
      <Card
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        openLib={openLib}
        setOpenLib={setOpenLib}
        numOfSongs={numOfSongs}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        duration={duration}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        openLib={openLib}
        setOpenLib={setOpenLib}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
      <audio
        onTimeUpdate={timeUpdatedHandler}
        onLoadedMetadata={initialSongMetaDataHandler}
        ref={audioRef}
        src={currentSong.audio}>
      </audio>
    </div>
  );
}

export default App;
