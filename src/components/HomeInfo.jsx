import React from 'react'
import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";


const HomeInfo = ( {currentStage }) => {
   if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, Wellcome! I'm
        <span className='font-semibold mx-2 text-white'>Xinqi Zhang (Kiki) </span>
        👋
        <br />
            Your Santa Clara University Trash Report Guide  💚
            <br />
            Try rotating the trash bins to explore more! 👇🏻
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Want to learn about our dataset? <br /> Explore our WasteData report
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Explore Data
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Want to get more direct insight? <br /> Explore our visualization :)
        </p>

        <Link to='/visualization' className='neo-brutalism-white neo-btn'>
          Visualization
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }
    
    if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Our data contains Santa Clara University waste data from 2015 to 2023. <br/> We analyzed the stream attribute and identified an interesting question: <br/> <span className='font-semibold mx-2 text-white'>How accurate is the recycling on campus? </span>
      </p>

    </div>
    );
  }

  return null;
}

export default HomeInfo
