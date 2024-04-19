interface PlusProps {
  size?: "small" | "medium" | "big";
  color?: "primaryDefault" | "primaryDark" | "black" | "white";
}

export function Plus({ color = "primaryDefault", size = "medium" }: PlusProps) {
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
    white: "#ffffff",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={iconSize[size].width}
      height={iconSize[size].height}
      fill={iconColor[color]}
      viewBox="0 0 256 256"
    >
      <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
    </svg>
  );
}
