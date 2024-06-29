import React, { useState } from 'react';
import '../assets/css/accordion.css';


const AccordionItem = ({ title, children, isActive, onClick }) => {
  return (
    <div>
      <button className={`accordion ${isActive ? 'active' : ''}`} onClick={onClick}>
        {title}
      </button>
      <div className="panel" style={{ display: isActive ? 'block' : 'none' }}>
        {children}
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <h1 className="my-4 text-center text-light">  How to play ? </h1>
      <p className="my-4 text-center text-light"> Follow these steps to get ready </p>
      <AccordionItem
        title="Section 1"
        isActive={activeIndex === 0}
        onClick={() => handleToggle(0)}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AccordionItem>
      <AccordionItem
        title="Section 2"
        isActive={activeIndex === 1}
        onClick={() => handleToggle(1)}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AccordionItem>
      <AccordionItem
        title="Section 3"
        isActive={activeIndex === 2}
        onClick={() => handleToggle(2)}
      >
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AccordionItem>
      <hr className="text-light"/>
    </div> 
  );
};

export default Accordion;
