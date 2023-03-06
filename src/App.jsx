import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Cards from './components/Cards/Cards'
import Sucess from './components/Success/Sucess'

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardholderName: '',
    expMonth: '',
    expYear: '',
    cvc: ''
  });

  const [ formSubmitted, setFormSubmitted] = useState(false)

  return (
      <div className="app">
        <Cards cardInfo={cardInfo}/>
        {!formSubmitted ? <Form cardInfo={cardInfo} setFormSubmitted={setFormSubmitted} setCardInfo={setCardInfo}/> : null}
        {formSubmitted ? <Sucess/> : ''}
      </div>

  )
}

export default App
