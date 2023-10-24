import React, { useRef, useState } from "react";
import ShippingInformation from "./ShippingInformation";
import PaymentIu from "./PaymentIu";

function FormDinamic() {
  const [isPreviu,setIsPreviu] = useState(false)
  const refformPayout = useRef();
  const submitDinamicForm = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    form.forEach((value, key) => {
      console.log("value ", value, key);
    });
  };

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
        <button
          onClick={() => {
            if (
              refformPayout.current.scrollLeft >
              refformPayout.current.clientWidth
            ) {
              refformPayout.current.scrollTo({
                left:
                  refformPayout.current.scrollLeft -
                  refformPayout.current.scrollWidth / 2,
                behavior: "smooth",
              });
            }
            // toca aqui tambien calcular lo que le quitamos ya que con scrollTo , no cambia de una vez el valor del scroll
            if(refformPayout.current.scrollLeft -
              refformPayout.current.scrollWidth / 2 <= refformPayout.current.clientWidth){
              setIsPreviu(false)
            }
          }}
          className="border border-black py-2 px-2 hover:bg-green-600"
        >
          Anterior
        </button> : null}

        <button
          className="border border-black  py-2 px-2 hover:bg-green-600"
          onClick={() => {
            setIsPreviu(true)
            console.log(
              "scoll del formdinamic",
              refformPayout.current.scrollWidth / 2
            );
            refformPayout.current.scrollTo({
              left:
                refformPayout.current.scrollLeft +
                refformPayout.current.scrollWidth / 2,
              behavior: "smooth",
            });
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default FormDinamic;
