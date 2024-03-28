interface CommentProps {
  size?: "small" | "medium" | "big";
  color?: "primaryDefault" | "primaryDark" | "black" | "white";
}

export function Comment({ color = "white", size = "medium" }: CommentProps) {
  const iconSize = {
    small: {
      width: 16,
      height: 16,
    },
    medium: {
      width: 22,
      height: 22,
    },
    big: {
      width: 32,
      height: 32,
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
      <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
    </svg>
  );
}
