import { FormNewPost } from "@/components/form/form-new-post";
import { Metadata } from "next";

export const dynamic = "force-static";

export default function NewPostPage() {
  return <FormNewPost />;
}

export const metadata: Metadata = {
  title: "Criar post",
  description: "Crie um novo post no site Dogs.",
};
