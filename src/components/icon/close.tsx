interface CloseProps {
  size?: "small" | "medium" | "big";
  color?: "primaryDefault" | "primaryDark" | "black";
}

export function Close({
  color = "primaryDefault",
  size = "medium",
}: CloseProps) {
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
      <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
    </svg>
  );
}
