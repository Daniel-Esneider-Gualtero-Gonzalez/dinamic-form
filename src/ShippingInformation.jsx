import useForm from "./useForm"

function ShippingInformation() {

    const {errors,register ,registerError} = useForm()


    return (
        <>
            <div className="">
                <h1 className="font-semibold text-xl">Informacion de envio</h1>

                <div className="sm:flex w-full border mt-1 border-blue-600">

                    <div className="mt-1 mx-1">
                        <label className="w-full" htmlFor="firstname">First Name</label>
                        <div className="mt-1">
                            <input onBlur={(e)=>{
                                console.log("name input event", e.target.name)
                                if(e.target.value.includes(".")){
                                    registerError(e.target.name,"puntos")
                                    }
                            }} {...register('firstname')} name="firstname" className="h-[35px] w-full border border-black rounded" type="text" />
                            { errors.firsname?.puntos ? <span>Error</span> : null}
                        </div>
                    </div>

                    <div className="mt-1 mx-1">
                        <label htmlFor="lastname">Last Name</label>
                        <div className="mt-1">
                            <input {...register('lastname')} name="lastname" className="h-[35px] w-full border border-black rounded" type="text" />
                        </div>
                    </div>
                </div>

                <label htmlFor="adress" className="w-full mt-1 flex">Adress</label>
                <div className="mt-1">
                    <input name="addres" className="h-[35px] w-full border border-black rounded" type="text" />
                </div>

                <div className="mt-1 border border-blue-600 sm:flex">

                    <div className="mx-1">
                        <label htmlFor="city" className="w-full">City</label>
                        <div className="mt-1">
                            <input name="city" className="h-[35px] w-full border border-black rounded" type="text" />
                        </div>
                    </div>

                    <div className="border mx-1   border-black">
                        <label htmlFor="country" className="">Country</label>
                        <div className=" border   ">
                            <select className="h-[35px] w-full rounded border border-black " name="country" id="country">
                                <option value="Colombia">Colombia</option>
                                <option value="Colombia">Mexico</option>
                                <option value="Colombia">EE.UU</option>
                            </select>
                        </div>
                    </div>

                </div>

                <label htmlFor="phone" className="w-full mt-1 flex">Phone</label>
                <div className="mt-1">
                    <input name="phone" className="h-[35px] w-full border border-black rounded" type="tel" />
                </div>

            </div>


        </>
    )
}

export default ShippingInformation