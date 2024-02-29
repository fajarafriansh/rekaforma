import type {
  ArticlesQueryVariables,
  GetPostQueryVariables,
  CategoriesQueryVariables,
  ProjectsQueryVariables,
  FeaturedProjectsQueryVariables,
  GetProjectQueryVariables,
} from '#gql'

export async function useGQLQuery(
  which: "articles" | "get_post" | "categories" | "projects" | "featured_projects" | "get_project",
  properties: ArticlesQueryVariables | GetPostQueryVariables | CategoriesQueryVariables | ProjectsQueryVariables | FeaturedProjectsQueryVariables | GetProjectQueryVariables
) {
  let data: any

  if (which === 'articles') {
    const res = await GqlArticles(<ArticlesQueryVariables>properties)
    data = { articles: res.postsConnection?.edges }
  }

  if (which === 'get_post') {
    const res = await GqlGetPost(<GetPostQueryVariables>properties)
    data = { get_post: res.post }
  }

  if (which === 'projects') {
    const res = await GqlProjects(<ProjectsQueryVariables>properties)
    data = { projects: res.projectsConnection?.edges }
  }

  if (which === 'featured_projects') {
    const res = await GqlFeaturedProjects(<ProjectsQueryVariables>properties)
    data = { featured_projects: res.projectsConnection?.edges }
  }

  if (which === 'get_project') {
    const res = await GqlGetProject(<GetProjectQueryVariables>properties)
    data = { get_project: res.project }
  }

  return data[which]
}