import { Photo } from "@/@types/global";
import { PhotoItem } from "../photo/photo-item";

interface FeedPhotosProps {
  photos: Photo[];
  pageIndex: number;
}

export function FeedPhotos({ photos, pageIndex }: FeedPhotosProps) {
  return (
    <li>
      <ul className="grid animate-fade-in grid-cols-2 gap-2 sm:gap-4">
        {photos.map((photo, i) => (
          <PhotoItem photo={photo} key={photo.id} pageIndex={pageIndex} />
        ))}
      </ul>
    </li>
  );
}
