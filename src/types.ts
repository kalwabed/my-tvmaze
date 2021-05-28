export interface Movie {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  premiered: string
  officialSite: string
  image: {
    medium: string
    original: string
  }
  rating: { average: number }
  summary: string
  updated: number
  _links: {
    self: {
      href: string
    }
    previousepisode: {
      href: string
    }
  }
}
