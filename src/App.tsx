import 'normalize.css';
import './styles/main.scss';

import { useState } from 'react';

import getMusicData, { Song } from './data/musicData';

import Card from './components/Card';
import Library from './components/Library';
import { open } from 'fs';

function App(): JSX.Element {
  const [data, _setData] = useState<Song[]>(getMusicData());
  const [currentSong, _setCurrentSong] = useState<Song>(data[1]);
  const [openLib, setOpenLib] = useState<boolean>(false);

  return (
    <div className="App">
      <Card currentSong={currentSong} openLib={openLib} setOpenLib={setOpenLib} />
      <Library songs={data} openLib={openLib} />
    </div>
  );
}

export default App;
