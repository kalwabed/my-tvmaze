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
