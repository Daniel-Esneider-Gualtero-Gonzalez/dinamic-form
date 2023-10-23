import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import FormDinamic from './FormDinamic'

import Question from './question'
import Question2 from './Question2'




function App() {
  const [showInput, setShowInput] = useState(false)
  const [question, setQuestion] = useState(null)

  const dinamicQuestions = [<Question />, <Question2 />]

  const submitDinamicForm = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    form.forEach((value, key) => {
      console.log("value ", value, key)
    })
  }

  const refInput = useRef()
  useEffect(() => {
    if (showInput === true) {
      refInput.current.style.visibility = "hidden"
    }
  }, [showInput])

  return (
    <>
      {/* <h1>Form dinamico</h1>


      <form onSubmit={submitDinamicForm}>

        {question === null ? <><label htmlFor="">Como te llamas?</label>
          <input ref={refInput} name='question' className='border px-5' type="text" /></> : null}

        {question >= 0 ? dinamicQuestions[question] : null}

        <button>Enviar</button>
      </form>

      <button onClick={() => setQuestion(e =>{
        if(e === null) return 0
        
        return e+1

      })} className='border'>Siguiente Pregunta</button>

      <button onClick={() => setShowInput(true)}>Ocultar input de question</button>


      {<span>{question}</span>} */}

      <FormDinamic />
    </>
  )
}

export default App
