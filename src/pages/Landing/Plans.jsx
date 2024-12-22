import React from 'react';

const plansData = [
  {
    id: 1,
    discount: '25% off',
    title: 'Bronze',
    price: '$30',
    subscription: '$Free',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  },
  {
    id: 2,
    discount: '30% off',
    title: 'Silver',
    price: '$50',
    subscription: '$Free',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  },
  {
    id: 3,
    discount: '35% off',
    title: 'Gold',
    price: '$70',
    subscription: '$Free',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  },
  {
    id: 4,
    discount: '40% off',
    title: 'Platinum',
    price: '$100',
    subscription: '$Free',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  },
];

const Plans = () => {
  return (
    
    <div className='mt-[100px]'>
         <h1 className='text-[24px] text-[#312F39] font-semibold leading-[66px] '>Find The Plan</h1>
         <h3 className='text-[48px] text-[#312F39] font-bold leading-[66px]'>That Work's For You</h3>
 
           <div className="flex  justify-center mt-[56px] gap-4">
                {plansData.map(plan => (
                  <div key={plan.id} className='border rounded-xl bg-[#E3FFDE] w-full sm:w-1/4 '>
                   <div className='p-4'>
                      <div className='flex justify-between items-center pb-[31px]'>
                        <p className='text-[16px] text-[#59565F] mt-8'>{plan.title}</p>
                        <span className='bg-[#95E189] px-2 py-1 text-[16px] mb-4 rounded-md'>{plan.discount}</span>
                      </div>
                      <h3 className='text-[#619259] text-[24px]'>{plan.price}</h3>
                      <h1 className='text-[31px] font-bold text-[#161616]'>{plan.subscription}<span className='font-medium text-[14px] leading-[21px] text-[#59565F]'>/month</span></h1>
                      <button className='text-[#169B00] border rounded-md border-[#169B00] px-[64px] py-[10px]'>check out</button>
                    </div>

                    
                    <div className='bg-white p-4 rounded-xl'>
                      {plan.features.map((feature, index) => (
                        <span key={index} className='flex items-center'>
                          <img src='/check-mark.png' alt='check mark' className='mr-2' />
                          {feature}
                        </span> 
                      ))}
                    </div>
                  </div>
                ))}
              </div>
    </div>
  
  );
}

export default Plans;
