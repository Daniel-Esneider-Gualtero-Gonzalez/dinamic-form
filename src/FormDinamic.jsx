import React, { useRef } from 'react'
import ShippingInformation from './ShippingInformation'
import PaymentIu from './PaymentIu'

function FormDinamic() {
  const submitDinamicForm = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    form.forEach((value, key) => {
      console.log("value ", value, key)
    })
  }
   
  
  
  return (
    <div className='contentForm px-2 py-2 border border-red-600'>
      <form onSubmit={submitDinamicForm} id='formDinamic' className='border border-yellow-500  py-1 flex overflow-hidden'>

       <div className='border py-2 px-2 sm:flex justify-center border-black   w-full flex-0 flex-shrink-0 flex-auto' >
        <ShippingInformation />
        
       </div>
       <div className='border py-2 px-2 border-black  mx-1 w-full flex-0 flex-shrink-0 flex-auto' >
        <PaymentIu />
        <button>Enviar</button>
       </div>

       
      </form>
      <button className='border border-black mx-auto flex py-2 px-2 hover:bg-green-600' onClick={()=>{
        const formDinamic = document.getElementById("formDinamic")
        
        
        console.log("scoll del formdinamic",formDinamic.scrollWidth / 2)
        formDinamic.scrollTo({left:formDinamic.scrollLeft + (formDinamic.scrollWidth / 2) , behavior:'smooth'})
          
      }}>Siguiente</button>
    </div>
  )
}

export default FormDinamic