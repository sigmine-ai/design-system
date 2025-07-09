interface SimpleCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const Checkbox = ({ size = 16, ...props }: SimpleCheckProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    style={{ display: "block", ...props.style }}
  >
    <rect
      y="0.5"
      width="16"
      height="16"
      rx="8"
      fill={props.color ?? "#13AC6C"}
    />
    <path
      d="M12 5.5L6.5 11L4 8.5"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default Checkbox;
