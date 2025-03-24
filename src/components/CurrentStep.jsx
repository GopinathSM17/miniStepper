import React from 'react'

const CurrentStep = ({count}) => {
    let currStep ={
        0 : "Add contact details for further communications",
        1 : "Add contact details for further communications",
        2 : "Add shipping address for successfull delivery",
        3 : "Complete payment to complete the order",
        4 : "Ready to get delivered",
        5 : "Order delivered successfully"
    } 
  return (
    <div className='flex pt-4'>{currStep[count]}</div>
  )
}

export default CurrentStep