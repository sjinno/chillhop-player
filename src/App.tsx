import 'normalize.css';
import './styles/main.scss';

import { useState, useRef } from 'react';

import getMusicData, { Song } from './data/musicData';

import Card from './components/Card';
import Library from './components/Library';

function App(): JSX.Element {
  // Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // State
  const [songs, setSongs] = useState<Song[]>(getMusicData());
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [openLib, setOpenLib] = useState<boolean>(false);
  const numOfSongs = songs.length;

  const [isPlaying, setIsPlaying] = useState(false);

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

      // Helper function
    const updateSongs = (oldIdx: number, newIdx: number) => {
      songs[oldIdx].active = false;
      songs[newIdx].active = true;
      return songs;
    };

  const songEndedHandler = async () => {
    const next = (currentSong.index + 1) === numOfSongs ? 0 : (currentSong.index + 1);
    await setCurrentSong(songs[next]);
    setSongs(updateSongs(currentSong.index, next));
    if (isPlaying) audioRef.current?.play();
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
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        openLib={openLib}
        setOpenLib={setOpenLib}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        onTimeUpdate={timeUpdatedHandler}
        onLoadedMetadata={initialSongMetaDataHandler}
        onEnded={songEndedHandler}
        ref={audioRef}
        src={currentSong.audio}
      >
      </audio>
    </div>
  );
}

export default App;
