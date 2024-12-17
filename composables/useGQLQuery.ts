import type {
  ArticlesQueryVariables,
  GetPostQueryVariables,
  NextPostQueryVariables,
  PreviousPostQueryVariables,
  CategoriesQueryVariables,
  ProjectsQueryVariables,
  FeaturedProjectsQueryVariables,
  GetProjectQueryVariables,
  GetPeopleQueryVariables,
} from "#gql";

export async function useGQLQuery(
  which:
    | "articles"
    | "get_post"
    | "next_post"
    | "prev_post"
    | "categories"
    | "projects"
    | "featured_projects"
    | "get_project"
    | "get_people",
  properties:
    | ArticlesQueryVariables
    | GetPostQueryVariables
    | NextPostQueryVariables
    | PreviousPostQueryVariables
    | CategoriesQueryVariables
    | ProjectsQueryVariables
    | FeaturedProjectsQueryVariables
    | GetProjectQueryVariables
    | GetPeopleQueryVariables
) {
  let data: any;

  if (which === "articles") {
    const res = await GqlArticles(<ArticlesQueryVariables>properties);
    data = { articles: res.postsConnection?.edges };
  }

  if (which === "get_post") {
    const res = await GqlGetPost(<GetPostQueryVariables>properties);
    data = { get_post: res.post };
  }

  if (which === "next_post") {
    const res = await GqlNextPost(<NextPostQueryVariables>properties);
    data = { next_post: res.posts };
  }

  if (which === "prev_post") {
    const res = await GqlPreviousPost(<PreviousPostQueryVariables>properties);
    data = { prev_post: res.posts };
  }

  if (which === "projects") {
    const res = await GqlProjects(<ProjectsQueryVariables>properties);
    data = { projects: res.projectsConnection?.edges };
  }

  if (which === "featured_projects") {
    const res = await GqlFeaturedProjects(<ProjectsQueryVariables>properties);
    data = { featured_projects: res.projectsConnection?.edges };
  }

  if (which === "get_project") {
    const res = await GqlGetProject(<GetProjectQueryVariables>properties);
    data = { get_project: res.project };
  }

  if (which === "get_people") {
    const res = await GqlGetPeople(<GetPeopleQueryVariables>properties);
    data = { get_people: res.people };
  }

  return data[which];
}
