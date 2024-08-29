import React from 'react'

const plans = [
    {
        name: "Basic",
        price: 1253,
        description: "Lorem ipsum dolor sit amet, consec tetur adipiscin asdhl. ",
        features: [
            "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit "
        ],
        isPopular: false
    },
    {
        name: "Standard",
        price: 1253,
        description: "Lorem ipsum dolor sit amet, consec tetur adipiscin asdhl. ",
        features: [
            "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit "
        ],
        isPopular: true
    },
    {
        name: "Premium",
        price: 1253,
        description: "Lorem ipsum dolor sit amet, consec tetur adipiscin asdhl. ",
        features: [
            "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit ", "Lorem ipsum dolor sit "
        ],
        isPopular: false
    },
]

const Plans = () => {

  return (
    <div>
        <h3 className='text-[#5FC34E]'>Pricing</h3>
        <p className='text-[24px] text-[#F5F5F5]'>Lorem ipsum dolor sit.</p>
    </div>
  )
}

export default Plans