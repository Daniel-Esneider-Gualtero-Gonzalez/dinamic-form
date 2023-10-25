import { useRef, useState } from "react"


function useForm() {

    const [errors,setErrors] = useState({})
    const  inputsRegisters = useRef([])

    const  register =  (inputname)=>{
        if(inputsRegisters.current.includes(inputname)) return console.log("El input name ya se encuentra registrado")

        inputsRegisters.current.push(inputname)

        console.log("input registrado" ,inputname)
      
    }

    //  registra los errores de un input en errors
    const registerError = (inputName,errorName) =>{

       
        console.log("input registrados cuando se ejecuta el register error", inputsRegisters)
        console.log("register errorr", typeof inputName ,errorName)
        if(!inputsRegisters.current.includes(inputName)) return console.log("No puede registrar un error a un input que no ha registrado")

        // SOLUCIONAR QUE EN EL ESTADO DE ERROR SEA ESTA ESTRUCTURA {INPUTNAME: {nameError: true} }
        { errorName}
        const inputNametoError = `${inputName}`
        errors[inputName] = errorName

        setErrors(e=> {

            const newErrors = {...e}
            newErrors[inputNametoError] = {errorName : true}
            return  newErrors
        })
        

       setTimeout(()=>{
        console.log("errors despues de registrar un error", errors)
       },3000)
    }



    return { errors,register , registerError}

}

export default useForm