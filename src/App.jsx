import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Form from './components/Form/Form'
import Cards from './components/Cards/Cards'

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '0000 0000 0000 0000',
    cardholderName: 'Jane Appleseed',
    expMonth: '00',
    expYear: '00',
    cvc: '000'
  });

  return (
      <div className="app">
        <Cards cardInfo={cardInfo}/>
        <Form cardInfo={cardInfo} setCardInfo={setCardInfo}/>
      </div>

  )
}

export default App
