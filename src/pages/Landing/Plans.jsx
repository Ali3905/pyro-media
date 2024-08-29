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
        <div className='mt-[200px]'>
            <h3 className='text-[#5FC34E]'>Pricing</h3>
            <p className='text-[24px] text-[#F5F5F5]'>Lorem ipsum dolor sit.</p>
            <div className='flex gap-[20px] justify-between'>
                {
                    plans.map((plan) => {
                        return <div className={`${plan.isPopular ? "bg-white scale-y-[1.3]" : "bg-[#89908970]"} px-[30px] py-[20px] flex flex-col gap-[20px]`}>
                            <p className={`font-medium text-[20px] ${plan.isPopular ? "text-[#66636B]" : "text-[#86848B]"}`}>{plan.name}</p>
                            <p className={`font-semibold text-[36px] ${plan.isPopular ? "text-[#161616]" : "text-[#F5F5F5]"}`}>{plan.price}</p>
                            <p className={`text-[14px] ${plan.isPopular ? "text-[#66636B]" : "text-[#86848B]"}`}>{plan.description}</p>
                            <ul className='flex flex-col'>
                                {plan.features.map((feature) => {
                                   return <li className={`text-[14px] ${plan.isPopular ? "text-[#66636B]" : "text-[#86848B]"}`}>{feature}</li>
                                })}
                            </ul>
                            <button className={`text-[14px] text-[#F5F5F5] px-8 py-2  ${plan.isPopular ? "bg-[color:var(--green)]" : "bg-transparent border-[color:var(--green)] border-2"} `}>Check out</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Plans