import 'normalize.css';
import './styles/main.scss';

import { useState } from 'react';

import getMusicData, { Song } from './data/musicData';

import Card from './components/Card';
import Library from './components/Library';

function App(): JSX.Element {
  const [data, _setData] = useState<Song[]>(getMusicData());
  const [currentSong, _setCurrentSong] = useState<Song>(data[1]);

  // data.forEach((song) => console.log(song));

  // console.log(data);

  return (
    <div className="App">
      <Card {...currentSong} />
      <Library data={data} />
    </div>
  );
}

export default App;
