import React from 'react';
import { logo } from '../assets';

function Hero() {
  return (
    <>
      <header className='w-full flex justify-center items-center flex-col'>
        <nav className="flex justify-between items-center w-full pt-3">
          <img className='w-28 object-contain' src={logo} alt="sumZ_logo" />

          <button
            className='black_btn'
            type='button'
            onClick={() => window.open('https://github.com/Asif-ibrahim101')}>
            Github
          </button>
        </nav>

        <br />
        <br />

        <h1 className='head_text'>Summaize Articles with <br className='max-md:hidden' />
          <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className="desc">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthy articles into clear and concise summaries
        </h2>
      </header>
    </>
  )
}

export default Hero