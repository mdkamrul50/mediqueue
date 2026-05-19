import React from 'react'

const Shape = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg
        className="relative block w-full h-15"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
          className="dark:fill-[#0c1322] fill-[#5e7551]"
        ></path>
      </svg>
    </div>
  );
}

export default Shape