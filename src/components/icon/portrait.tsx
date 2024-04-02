interface PortraitProps {
  size?: "small" | "medium" | "big";
  color?: "primaryDefault" | "primaryDark" | "black";
}

export function Portrait({
  color = "primaryDefault",
  size = "medium",
}: PortraitProps) {
  const iconSize = {
    small: {
      width: 20,
      height: 14,
    },
    medium: {
      width: 28,
      height: 22,
    },
    big: {
      width: 36,
      height: 30,
    },
  };

  const iconColor = {
    primaryDefault: "#ffbb11",
    primaryDark: "#764701",
    black: "#000000",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize[size].width}
      height={iconSize[size].height}
      fill={iconColor[color]}
      viewBox="0 0 256 256"
    >
      <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"></path>
    </svg>
  );
}
