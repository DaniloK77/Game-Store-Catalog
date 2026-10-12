export async function getGames(params?: {
  search?: string
  platform?: string
  genre?: string
  inStock?: boolean
  sort?: string
}) {
  const query = new URLSearchParams()

  if (params?.search) query.append("search", params.search)
  if (params?.platform) query.append("platform", params.platform)
  if (params?.genre) query.append("genre", params.genre)
  if (params?.inStock) query.append("inStock", "true")
  if (params?.sort) query.append("sort", params.sort)

  try {
    const res = await fetch(
      `http://localhost:4000/api/games?${query.toString()}`,
    )

    if (!res.ok) {
      console.warn(`getGames: API responded with ${res.status}`)
      return { data: [] }
    }

    return await res.json()
  } catch (error) {
    // API is unreachable (e.g. backend not started yet) - show an empty list instead of crashing
    console.warn("getGames: API is not reachable", error)
    return { data: [] }
  }
}