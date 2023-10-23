import React from 'react'

function PaymentIu() {
  return (
    <>
      <div>

        <div className='mt-2'>
          <input className='mx-1' type="radio" name="metodPago" id="creditcard" /> <label htmlFor="creditcard">CreditCard</label>
          <input className='ml-7' type="radio" name="Credit Card" id="" /> <label className='border' htmlFor="">Paypal</label>
          <input className='ml-7' type="radio" name="Credit Card" id="" /> <label className='border ' htmlFor="">E Transfer</label>
        </div>

        <label htmlFor="cardnumber" className='mt-2 flex'>Card Number</label>
        <div className="mt-1">
          <input name="cardnumber" className="h-[35px] w-full border border-black rounded" type="text" />
        </div>


        <label htmlFor="Name on Card" className='mt-1 flex'>Name on Card</label>
        <div className="mt-1">
          <input name="cardnumber" className="h-[35px] w-full border border-black rounded" type="text" />
        </div>

        <div className='mt-1 flex  justify-between'>
          <div>

            <label htmlFor="expirationdate">Expiration date MM/YY</label>
            <div className="mt-1">
              <input name="expirationdate" className="h-[35px] w-full border border-black rounded" type="text" />
            </div>
          </div>
          <div>
            <label htmlFor="cvc">CVC</label>
            <div className="mt-1">
              <input name="cardnumber" className="h-[35px] w-full border border-black rounded" type="number" maxLength={3} />
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default PaymentIu