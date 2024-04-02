interface FeedProps {
  size?: "small" | "medium" | "big";
  color?: "primaryDefault" | "primaryDark" | "black";
}

export function Feed({ color = "primaryDefault", size = "medium" }: FeedProps) {
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
      <path d="M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"></path>
    </svg>
  );
}
