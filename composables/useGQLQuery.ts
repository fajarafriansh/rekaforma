import type {
  ArticlesQueryVariables,
  CategoriesQueryVariables
} from '#gql'

export async function useGQLQuery(
  which: "articles" | "categories",
  properties: ArticlesQueryVariables | CategoriesQueryVariables
) {
  let data: any

  if (which === 'articles') {
    const res = await GqlArticles(<ArticlesQueryVariables>properties)
    data = { articles: res.postsConnection?.edges }
  }

  return data[which]
}