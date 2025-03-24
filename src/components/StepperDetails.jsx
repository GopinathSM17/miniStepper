import React from 'react'

const StepperDetails = () => {
  return (
    <div className='stepper-details flex w-[530px]  justify-center gap-[10%] '>
        <p className='contact-details whitespace-nowrap '>Contact Details</p>
        <p className='shipping-address whitespace-nowrap'>Shipping address</p>
        <p className='payment whitespace-nowrap'>Payment</p>
        <p className='elivered pl-[8%] whitespace-nowrap'>Delivered</p>
    </div>
  )
}

export default StepperDetails