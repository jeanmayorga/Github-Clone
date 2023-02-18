import { useParams } from "react-router-dom";
import { useQueryParam } from "use-query-params";
import {
  Container,
  Layout,
  Nav,
  RepositoriesTab,
  SideBar,
} from "../../components";
import { useProfile } from "./hooks";

export function ProfileView() {
  const [tab] = useQueryParam("tab");
  const { user } = useParams<{
    user: string;
  }>();

  const { profile, isLoadingProfile } = useProfile(user);

  if (isLoadingProfile || !profile) {
    return <div>isLoading</div>;
  }

  return (
    <Layout>
      <div>
        <Nav repositoriesCount={profile.public_repos} />
        <Container>
          <div className="grid gap-3 grid-cols-4">
            <div className="-mt-[32px]">
              <SideBar profile={profile} />
            </div>
            <div className="col-span-3 ml-3">
              {tab === "repositories" && <RepositoriesTab />}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
