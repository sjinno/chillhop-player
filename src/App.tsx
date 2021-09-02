import 'normalize.css';
import './styles/main.scss';

import { useState } from 'react';

import getMusicData, { Song } from './data/musicData';

import Card from './components/Card';
import Library from './components/Library';

function App(): JSX.Element {
  const [songs, setSongs] = useState<Song[]>(getMusicData());
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [openLib, setOpenLib] = useState<boolean>(false);
  const numOfSongs = songs.length;

  return (
    <div className="App">
      <Card
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        openLib={openLib}
        setOpenLib={setOpenLib}
        numOfSongs={numOfSongs}
      />
      <Library
        songs={songs}
        setSongs={setSongs}
        openLib={openLib}
        setOpenLib={setOpenLib}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;
