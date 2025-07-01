import * as React from "react";

interface SimpleCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const SimpleCheck = ({ size = 16, ...props }: SimpleCheckProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M13.3334 4L6.00008 11.3333L2.66675 8"
      stroke={props.color ?? "#818491"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SimpleCheck;
