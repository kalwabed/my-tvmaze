import { Movie } from '@/types'

const url = 'https://api.tvmaze.com/shows'

export const getAllMovies = async (): Promise<Movie[]> => {
  return (await (await fetch(url)).json()) as Movie[]
}

export const getMovieById = async (id: string): Promise<Movie> => {
  return (await (await fetch(`${url}/${id}`)).json()) as Movie
}
