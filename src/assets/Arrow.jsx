import React from "react";

const Arrow = ({ color }) => {
  return (
    <div style={{color:`${color}`}}>
      <svg
        width="100%"
        viewBox="0 0 27 33"
        display="block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 0L15 0L15 27H12L12 0ZM12 30L12 27L9 27V24H6V21H3L3 18H0L0 21H3L3 24H6L6 27H9L9 30L12 30ZM15 30H12V33H15V30ZM18 27V30H15L15 27H18ZM21 24H18V27H21V24ZM24 21V24H21V21H24ZM24 21V18H27V21H24Z"
          fill={`${color}`}
        ></path>
      </svg>
    </div>
  );
};

export default Arrow;
