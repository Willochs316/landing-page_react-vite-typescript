interface IconProps {
  className?: string;
}

export default function Icon({ className }: IconProps) {
  return (
    <>
      <svg
        fill="#ffffff"
        className={className}
        width="32px"
        height="32px"
        viewBox="0 0 1920 1920"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1920 1411.412v225.882H0v-225.882h1920Zm0-564.706v225.882H0V846.706h1920ZM1920 282v225.882H0V282h1920Z"
          fill-rule="evenodd"
        />
      </svg>
    </>
  );
}
