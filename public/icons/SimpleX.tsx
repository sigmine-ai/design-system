import * as React from "react";

const SimpleX = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M12 4L4 12"
      stroke="#3E4151"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 4L12 12"
      stroke="#3E4151"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default SimpleX;
