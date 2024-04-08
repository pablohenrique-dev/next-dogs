import { Photo } from "@/@types/global";
import { PhotoItem } from "../photo/photo-item";

interface FeedPhotosProps {
  photos: Photo[];
}

export function FeedPhotos({ photos }: FeedPhotosProps) {
  return (
    <li>
      <ul className="grid animate-fade-in grid-cols-2 gap-4">
        {photos.map((photo, i) => (
          <PhotoItem photo={photo} key={photo.id} photoIndex={i} />
        ))}
      </ul>
    </li>
  );
}
