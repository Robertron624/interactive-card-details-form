import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Cards from './components/Cards/Cards'

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardholderName: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });

  return (
      <div className="app">
        <Cards cardInfo={cardInfo}/>
        <Form cardInfo={cardInfo} setCardInfo={setCardInfo}/>
      </div>

  )
}

export default App
