import { revalidateTag } from "next/cache";

export function revalidateTags(tags: string[]) {
  for (let index = 0; index < tags.length; index++) {
    revalidateTag(tags[index]);
  }
}
