function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="150"
        height="150"
        display="block"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
        style={{}}
      >
        <circle
          cx="50"
          cy="50"
          r="32"
          fill="none"
          stroke="#fe718d"
          strokeDasharray="50.26548245743669 50.26548245743669"
          strokeLinecap="round"
          strokeWidth="8"
        >
          <animateTransform
            attributeName="transform"
            dur="1s"
            keyTimes="0;1"
            repeatCount="indefinite"
            type="rotate"
            values="0 50 50;360 50 50"
          ></animateTransform>
        </circle>
      </svg>
    </div>
  );
}

export default LoadingSpinner;
