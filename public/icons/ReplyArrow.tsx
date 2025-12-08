interface SimpleCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ReplyArrow = ({ size = 16, ...props }: SimpleCheckProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    {...props}
  >
    <path
      d="M10 6.66406L13.3333 9.9974L10 13.3307"
      stroke="#AFB1C1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.66406 2.66406V7.33073C2.66406 8.03797 2.94501 8.71625 3.44511 9.21635C3.94521 9.71644 4.62349 9.9974 5.33073 9.9974H13.3307"
      stroke="#AFB1C1"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default ReplyArrow;
