import React from 'react'

export const WaveForm = () => {
  return (
    <div className="p-4">
        <svg 
          viewBox="0 0 61 49" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-24"
        >
          {/* Static background waveform */}
          <path
            d="M0 31H14V15.5H21V48H28V1H34.5L35.5 48H42V15.5H48V31H61"
            fill="none"
            stroke="#93C5FD"  // blue-300
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
  
          {/* Animated foreground waveform */}
          <path
            d="M0 31H14V15.5H21V48H28V1H34.5L35.5 48H42V15.5H48V31H61"
            fill="none"
            stroke="#fff"  // blue-600
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,200;200,200"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              values="0;-200"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
  )
}
