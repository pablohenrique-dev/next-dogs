import { userGetAction } from "@/actions/user-get";
import { Fallback } from "@/components/fallback";
import { Feed } from "@/components/feed/feed";
import { Metadata } from "next";

export default async function ProfilePage() {
  const { data: user } = await userGetAction();
  return (
    <Feed
      username={user ? user.username : null}
      fallback={
        <Fallback
          message="Você ainda não possui nenhum post."
          redirectUrl="/profile/new-post"
          linkText="Criar post"
        />
      }
    />
  );
}

export const metadata: Metadata = {
  title: "Minha conta",
  description: "Veja seus posts no site Dogs.",
};
