import React from 'react'

const Preloader = () => {
  return (
    <div className='techwave_fn_preloader enabled'>
    <svg>
       <circle
         className="first_circle"
         cx={"50%"}
         cy={"50%"}
         r={"70"}
         stroke='black'
         strokeWidth="3"
         fill='none'
         >
        </circle>
       <circle
        className="second_circle"
        cx={"50%"}
        cy={"50%"}
        r={"70"}
        stroke='blue'
        strokeWidth="3"
        fill='none'
        >
       </circle>
    </svg>
    </div>
   
  )
}

export default Preloader