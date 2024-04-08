export function PhotosSkeleton() {
  return (
    <ul className="container my-6 grid animate-fade-in grid-cols-2 gap-4">
      {Array.from({ length: 6 }).map((_, i) => {
        return (
          <li
            key={i}
            className="dark:bg-neutral00 aspect-square animate-pulse overflow-hidden rounded border bg-neutral-light"
          ></li>
        );
      })}
    </ul>
  );
}
