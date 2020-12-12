import * as React from "react";

function SvgBlueLogo(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 130 130"
      {...props}
    >
      <g data-name="Group 1" transform="translate(-88 -57)">
        <circle
          data-name="Ellipse 1"
          cx={65}
          cy={65}
          r={65}
          transform="translate(88 57)"
          fill="#1e66f8"
        />
        <path
          data-name="Union 1"
          d="M163.03 163.569a14.002 14.002 0 01-11.076-16.414l11.249-57.925a14.002 14.002 0 0127.49 5.339l-11.253 57.925a13.992 13.992 0 01-16.414 11.075zm-35.624 2.303a14.002 14.002 0 01-11.075-16.414l11.249-57.925a14.002 14.002 0 0127.49 5.339l-11.253 57.925a13.993 13.993 0 01-16.414 11.077z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

export default SvgBlueLogo;
