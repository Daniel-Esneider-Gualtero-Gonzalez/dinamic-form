import { useEffect, useRef, useState } from "react"


function useForm() {

    // TENER UNA FUNCION QUE ELIMINE EL ERROR , CUANDO PASE LAS VALIDACIONES

    const [errors, setErrors] = useState({})
    const inputsRegisters = useRef([])

    const register = (inputname) => {
        if (inputsRegisters.current.includes(inputname)) return //console.log("El input name ya se encuentra registrado")

        inputsRegisters.current.push(inputname)

    }

    //  registra los errores de un input en errors
    const registerError = (inputName, errorName) => {

        if (!inputsRegisters.current.includes(inputName)) return console.log("No puede registrar un error a un input que no ha registrado")

        setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
        
            if (!updatedErrors[inputName]) {
              updatedErrors[inputName] = {};
            }
        
            if (errorName in updatedErrors[inputName]) {
              console.log("El error ya se encuentra registrado", errorName);
              return prevErrors;
            } else {
              updatedErrors[inputName] = {
                ...updatedErrors[inputName],
                [errorName]: true,
              };
              return updatedErrors;
            }
          });

    }

    // function que limpia los errores. Si  la validacion que hagan pasa y si existe ese posible error
    const cleanError = (inputName,errorName) =>{
       
        if(inputName in errors){
            
            const errorsInput = errors[inputName]

            if(errorName in errorsInput && errorName in errorsInput !== undefined ){
                console.log("el error",errorName , " se encuentra en errors de ese input")
                delete errorsInput[errorName]
                setErrors(e=>{
                    return {...e, [inputName]: errorsInput}
                })
            }else{
                return console.log("el error no se encuentra en ese input")
            }

        }else{
            return
        }
    }

    // PENEIENTE DE TERMINAR
    const handleSubmitForm = (e) =>{

        const data = { }
        let form = new FormData(e.target)
        

        for (let i = 0; i < inputsRegisters.current.length; i++) {
            
            const inputName = inputsRegisters.current[i]
            const valueInput = form.get(inputName)
            data[inputName] = valueInput
            
        }

        return data
    }

    useEffect(() => console.log("errors", errors), [errors])





    return { errors, register, registerError ,cleanError , handleSubmitForm}

}

export default useForm