import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqItems = [
    {
      question: "Lorem Ipsum Dolor Sit Amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
    },
    {
      question: "Lorem Ipsum Dolor Sit Amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
    },
    {
      question: "Lorem Ipsum Dolor Sit Amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
    },
    {
      question: "Lorem Ipsum Dolor Sit Amet?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
    },
  ];

  return (

    <div className="flex items-start mt-[200px] space-x-8">
    {/* Left Section: Title */}
    <div className="w-1/3">
      <h3 className="text-[#312F39] font-medium text-[24px]">Answer</h3>
      <h1 className="text-[#312F39] font-bold text-[48px]">To Your Questions</h1>
    </div>
  
    {/* Right Section: FAQ */}
    <div className="w-2/3 space-y-4 mt-[150px]">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`border border-green-600 rounded-lg p-4 ${openIndex === index ? 'shadow-lg' : ''}`}
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold text-green-700">{item.question}</h3>
            {openIndex === index ? (
              <Minus className="text-green-700" />
            ) : (
              <Plus className="text-green-700" />
            )}
          </div>
          {openIndex === index && (
            <p className="mt-4 text-gray-600">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default FAQ;












