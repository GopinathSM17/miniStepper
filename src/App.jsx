import react from 'react'
import { useState } from 'react'
import Header from './components/header'
import Stepper from './components/Stepper'
import StepperDetails from './components/StepperDetails'
import CurrentStep from './components/CurrentStep'
import Buttons from './components/Buttons'

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center'>
      <Header />
      <Stepper count={count} />
      <StepperDetails count={count} />
      <CurrentStep count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}

export default App