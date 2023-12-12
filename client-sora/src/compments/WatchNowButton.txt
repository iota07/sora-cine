import React from 'react';

const WatchNowButton = () => {
  const launchEpisode = () => {
    // Introduce the function to launch the latest episode of the series
    console.log('Episode launched!');
  };

  return (
    <button
      className="bg-[#f52100] hover:bg-[#0b0029] text-white text-lg md:text-3xl font-bold py-2 md:py-[6px] px-4 md:px-6 rounded-full mt-[1rem] flex items-center"
      onClick={launchEpisode}
      aria-label="Watch now"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-14 h-4 md:w-8 md:w-14 md:h-6 lg:w-10 lg:h-10 xl:w-12 xl:h-12 mr-2"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
      </svg>
      <p className="md:whitespace-nowrap hidden lg:inline">Watch now</p>
    </button>
  );
};

export default WatchNowButton;