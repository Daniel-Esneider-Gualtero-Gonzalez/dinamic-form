import React, { useRef } from 'react'
import ShippingInformation from './ShippingInformation'
import PaymentIu from './PaymentIu'

function FormDinamic() {

  const refformPayout = useRef()
  const submitDinamicForm = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    form.forEach((value, key) => {
      console.log("value ", value, key)
    })
  }
   
  
  
  return (
    <div className='contentForm px-2 py-2 border border-red-600'>
      <form ref={refformPayout} onSubmit={submitDinamicForm} id='formDinamic' className='border border-yellow-500  py-1 flex overflow-hidden'>

       <div className='border py-2 px-2 sm:flex justify-center border-black   w-full flex-0 flex-shrink-0 flex-auto' >
        <ShippingInformation />
        
       </div>
       <div className='justify-center flex border py-2 px-2 border-black  mx-1 w-full flex-0 flex-shrink-0 flex-auto' >
        <PaymentIu />
      
       </div>

       
      </form>

      <button onClick={()=>{
        if(refformPayout.current.scrollLeft > refformPayout.current.clientWidth){
          refformPayout.current.scrollTo({left: refformPayout.current.scrollLeft - (refformPayout.current.scrollWidth / 2),behavior:'smooth' })
        }
      }} className='border border-black'>Anterior</button>
      <button className='border border-black mx-auto flex py-2 px-2 hover:bg-green-600' onClick={()=>{
        
        console.log("scoll del formdinamic",formDinamic.scrollWidth / 2)
        refformPayout.current.scrollTo({left:refformPayout.current.scrollLeft + (refformPayout.current.scrollWidth / 2) , behavior:'smooth'})
          
      }}>Siguiente</button>
    </div>
  )
}

export default FormDinamic