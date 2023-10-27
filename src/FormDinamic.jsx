import React, { useEffect, useRef, useState } from "react";
import ShippingInformation from "./ShippingInformation";
import PaymentIu from "./PaymentIu";
import useForm from "./useForm";

function FormDinamic() {
  const [isPreviu,setIsPreviu] = useState(false)
  const [section,setSection] = useState(1) 
  const {errors,register,registerError,cleanError,handleSubmitForm} = useForm()
  const refformPayout = useRef();
  // importante actualizar si desea agregar otra seccion
  const cantSections = 3
 
  const submitPayoutForm = (e) => {
    e.preventDefault()
    const data = handleSubmitForm(e)

    console.log("data de mi form", data)
  };

  

  const previuSection = ()=>{
    if ( refformPayout.current.scrollLeft > refformPayout.current.scrollLeft / cantSections) {
      
      const PREVIUSECTION = refformPayout.current.scrollLeft - refformPayout.current.scrollWidth / cantSections
      refformPayout.current.scrollTo({ left: PREVIUSECTION , behavior: "smooth",});

      // verificamos  si despues de realizar el previu hay mas previus
      if(PREVIUSECTION <= refformPayout.current.clientWidth){
        setIsPreviu(false)
      }
    }

  }

  const nextSection = ()=>{
    setIsPreviu(true)
    const newSection =  refformPayout.current.scrollLeft + refformPayout.current.scrollWidth / cantSections
    refformPayout.current.scrollTo({left: newSection , behavior: "smooth", });

    
  }

  useEffect(()=> {

    window.addEventListener('resize',(e)=>{
      console.log("resize scrollwidth dividido entre cant senction", (refformPayout.current.scrollWidth / cantSections))
      // Controlar el scroll cuando hacen resize, ya que se ve la 2 section
      refformPayout.current.scrollTo({left:(refformPayout.current.scrollLeft * section), behavior:'auto'})
    })
  },[])

 

  return (
    <div className="contentForm px-2 py-2 border border-red-600">
      <form
        ref={refformPayout}
        onSubmit={submitPayoutForm}
        id="formDinamic"
        className="border border-yellow-500  py-1 flex overflow-hidden"
      >
        <div className="border py-2 px-2 sm:flex justify-center border-black   w-full flex-0 flex-shrink-0 flex-auto">
          <ShippingInformation errors={errors} register={register} registerError={registerError} cleanError={cleanError} />
        </div>
        <div className="justify-center flex border py-2 px-2 border-black  mx-1 w-full flex-0 flex-shrink-0 flex-auto">
          <PaymentIu />
        </div>
        <div className="justify-center flex border py-2 px-2 border-black  mx-1 w-full flex-0 flex-shrink-0 flex-auto">
          tercera seccion
        </div>
        <button type="submit" style={{'display':'none'}}></button>
      </form>



      <div className="flex justify-center mt-3">

        {refformPayout.current && isPreviu  ? 
        <button onClick={previuSection} className="border border-black py-2 px-2 hover:bg-green-600" >
          Anterior
        </button> : null}

        <button onClick={nextSection} className="border border-black  py-2 px-2 hover:bg-green-600">
          Siguiente
        </button>

        <button type="submit" onClick={()=> {
          const btnEnviar = refformPayout.current.querySelector('button[type=submit]');
          btnEnviar.click()
        }}>Enviar</button> 
      </div>

      
    </div>
  );
}

export default FormDinamic;
