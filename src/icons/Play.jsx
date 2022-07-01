import React from "react";

export const Play = (props) => {
  return (
    <svg
      {...props}
      width="32"
      height="33"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16.5" r="16" fill="url(#paint0_linear_41_122)" />
      <path
        d="M22.5 14.734C23.1667 15.1189 23.1667 16.0811 22.5 16.466L13.35 21.7488C12.6833 22.1337 11.85 21.6526 11.85 20.8828L11.85 10.3172C11.85 9.54745 12.6833 9.06632 13.35 9.45122L22.5 14.734Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_41_122"
          x1="16"
          y1="0.5"
          x2="16"
          y2="32.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FF9966" />
          <stop offset="1" stop-color="#FF5E62" />
        </linearGradient>
      </defs>
    </svg>
  );
};
