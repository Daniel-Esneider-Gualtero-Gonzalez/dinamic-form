import React, { useEffect, useRef, useState } from "react";
import ShippingInformation from "./ShippingInformation";
import PaymentIu from "./PaymentIu";

function FormDinamic() {
  const [isPreviu,setIsPreviu] = useState(false)
  const refformPayout = useRef();
  const cantSections = 2
  const [isFinished,setIsFinished] = useState(false)
  const submitDinamicForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    form.forEach((value, key) => {
      console.log("value ", value, key);
    });
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

    console.log("scroll left" , refformPayout.current.scrollWidth - newSection)
    setTimeout(()=> console.log("scroll wi"),2000)
  }

  useEffect(()=> {

    window.addEventListener('resize',(e)=>{
      
      // Controlar el scroll cuando hacen resize, ya que se ve la 2 section
      refformPayout.current.scrollTo({left: (refformPayout.current.scrollWidth / cantSections ) + refformPayout.current.scrollLeft, behavior:'auto'})
    })
  },[])

  return (
    <div className="contentForm px-2 py-2 border border-red-600">
      <form
        ref={refformPayout}
        onSubmit={submitDinamicForm}
        id="formDinamic"
        className="border border-yellow-500  py-1 flex overflow-hidden"
      >
        <div className="border py-2 px-2 sm:flex justify-center border-black   w-full flex-0 flex-shrink-0 flex-auto">
          <ShippingInformation />
        </div>
        <div className="justify-center flex border py-2 px-2 border-black  mx-1 w-full flex-0 flex-shrink-0 flex-auto">
          <PaymentIu />
        </div>
      </form>

      <div className="flex justify-center mt-3">

        {refformPayout.current && isPreviu  ? 
        <button onClick={previuSection} className="border border-black py-2 px-2 hover:bg-green-600" >
          Anterior
        </button> : null}

        {isFinished ?  <button>Enviar</button> : <button onClick={nextSection} className="border border-black  py-2 px-2 hover:bg-green-600">
          Siguiente
        </button>}
      </div>

      
    </div>
  );
}

export default FormDinamic;
