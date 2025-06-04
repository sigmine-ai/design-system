import * as React from "react";

const HealthCare = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <path
      d="M23.8676 5.35655C23.2975 4.76797 22.6205 4.30107 21.8755 3.98251C21.1304 3.66396 20.3318 3.5 19.5254 3.5C18.7189 3.5 17.9203 3.66396 17.1752 3.98251C16.4302 4.30107 15.7532 4.76797 15.1831 5.35655L13.9999 6.57749L12.8166 5.35655C11.665 4.16822 10.103 3.50062 8.47437 3.50062C6.84571 3.50062 5.28375 4.16822 4.13212 5.35655C2.98048 6.54489 2.3335 8.15662 2.3335 9.83718C2.3335 11.5177 2.98048 13.1295 4.13212 14.3178L5.31535 15.5387L13.9999 24.5L22.6844 15.5387L23.8676 14.3178C24.438 13.7295 24.8905 13.031 25.1992 12.2622C25.5079 11.4934 25.6668 10.6694 25.6668 9.83718C25.6668 9.00499 25.5079 8.18096 25.1992 7.41216C24.8905 6.64336 24.438 5.94486 23.8676 5.35655Z"
      fill={props.color ?? "#3E4151"}
      stroke={props.color ?? "#3E4151"}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.3335 15.1667H8.27289L10.3517 10.5L12.7275 15.1667H18.6668"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HealthCare;
