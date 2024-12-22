import React from 'react'

const Testimonials = () => {
   
    const cardData = [
        {
          id: 1,
          imgSrc: '/test1.png',
          title: 'Rock Star DSP',
          description: 'Lorem ipsum dolor sit',
          details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

          rating: '5.0'
        },
        {
          id: 2,
          imgSrc: '/test1.png',
          title: 'Super Cool Ad Tech',
          description: 'Ut enim ad minim veniam',
          details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          rating: '4.8'
        },
        {
          id: 3,
          imgSrc: '/test1.png',
          title: 'Expert Performance Tool',
          description: 'Quis nostrud exercitation',
          details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          rating: '4.9'
        },
        {
          id: 4,
          imgSrc: '/test1.png',
          title: 'Marketing Pro Software',
          description: 'Excepteur sint occaecat',
          details: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          rating: '5.0'
        }
      ];



  return (
<div>
  <h1 className="text-[48px] font-medium text-[#312F39] leading-[72px]">Trusted by</h1>
  <h1 className="text-[48px] font-medium text-[#312F39] leading-[72px]">
    <span className="text-[#169B00] font-semibold">2500+</span> happy customers
  </h1>
  
  <div
  className="relative bg-no-repeat bg-center rounded-lg p-8 w-full max-w-[1600px] mx-auto flex items-center justify-center"
  style={{
    backgroundImage: "url('/world-bg.png')",
    backgroundSize: "contain", // Ensures the entire image fits within the container
    height: "500px", // Adjust height as needed
  }}
>
  <div className="flex gap-6">
    {cardData.map((card) => (
      <div
        key={card.id}
        className="bg-white shadow-md rounded-2xl px-[32px] pt-[32px] pb-[28px]"
      >
        <div className="flex items-center gap-4">
          <img src={card.imgSrc} alt="img" />
          <span>
            <h1 className="text-[#59565F] text-[14px]">{card.title}</h1>
            <p className="text-[#86848B] text-[12px]">{card.description}</p>
          </span>
        </div>
        <p className="text-[12px] text-[#59565F]">{card.details}</p>
        <p>{card.rating}</p>
      </div>
    ))}
  </div>
</div>

</div>

  )
}

export default Testimonials