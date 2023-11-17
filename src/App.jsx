import { useState } from 'react'
import './scss/App.scss'
import data from '../data.json'
import PersonCard from './components/PersonCard'
import TimeCard from './components/TimeCard'


function App() {
  const [freqence, setFrequence] = useState('weekly')

  function freqenceHandler(freq) {
    setFrequence(freq)
  }

  return (
    <div className="container">
      <PersonCard freqence={freqence} freqenceHandler={freqenceHandler} />
      <div className="container-timeCards">
        {data.map((d, index) =>
          <TimeCard
            key={index}
            data={d}
            freqence={freqence}
          />
        )}
      </div>
    </div>
  )
}

export default App
