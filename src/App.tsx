import 'normalize.css';
import './styles/main.scss';

import { useState } from 'react';

import getMusicData, { Song } from './data/musicData';

import Card from './components/Card';
import Library from './components/Library';
import { open } from 'fs';

function App(): JSX.Element {
  const data: Song[] = getMusicData();
  const [songIdx, setSongIdx] = useState<number>(0);
  const [currentSong, setCurrentSong] = useState<Song>(data[songIdx]);
  const [openLib, setOpenLib] = useState<boolean>(false);
  const maxDataIdx = data.length;

  return (
    <div className="App">
      <Card
        data={data}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        openLib={openLib}
        setOpenLib={setOpenLib}
        songIdx={songIdx}
        setSongIdx={setSongIdx}
        maxDataIdx={maxDataIdx}
      />
      <Library
        songs={data}
        openLib={openLib}
        setOpenLib={setOpenLib}
      />
    </div>
  );
}

export default App;
