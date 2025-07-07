import * as React from "react";

interface SimpleCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const SimpleArrowUpRight = ({ size = 16, ...props }: SimpleCheckProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M7 17L17 7"
      stroke={props.color ?? "#818491"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7H17V17"
      stroke={props.color ?? "#818491"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SimpleArrowUpRight;
