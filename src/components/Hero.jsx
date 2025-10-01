// src/components/Hero.jsx
import React from 'react';
import data from '../data.json';

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl font-bold mb-4">{data.hero.name}</h1>
          <h2 className="text-2xl text-gray-400 mb-6">{data.hero.title}</h2>
          <p className="text-lg text-gray-300 mb-8">
            {data.hero.description}
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              Get In Touch
            </a>
            <a href="#experience" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition duration-300">
              View Experience
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={data.hero.profileImage} alt="Profile" className="w-64 h-64 rounded-full object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
