// LoadingSquare.jsx
import React from "react";

function SquareIcon() {
  return (
    <div className="p-4">
      <svg 
        width="90" 
        height="90" 
        viewBox="0 0 104 104" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Đường viền cố định màu hồng */}
        <path 
          d="M12 2H92C97.5229 2 102 6.47716 102 12V92C102 97.5229 97.5228 102 92 102H12C6.47715 102 2 97.5228 2 92V12C2 6.47715 6.47716 2 12 2Z" 
          className="stroke-[#EEA8AC] stroke-[5]"
        />
        {/* Đường viền động màu trắng */}
        <path 
          d="M12 2H92C97.5229 2 102 6.47716 102 12V92C102 97.5229 97.5228 102 92 102H12C6.47715 102 2 97.5228 2 92V12C2 6.47715 6.47716 2 12 2Z" 
          className="stroke-white stroke-[5] animate-path"
        />
      </svg>
    </div>
  );
}

export default SquareIcon;
