import { GetStaticPaths, GetStaticProps } from 'next'

import { getAllMovies, getMovieById } from '@/lib/tvmaze'

const MovieDetailPage = () => {
  return <div></div>
}

export const getStaticPaths: GetStaticPaths = async () => {
  const movies = await getAllMovies()

  return { paths: movies.map(movie => ({ params: { movieId: movie.id.toString() } })), fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const movieId = params?.movieId as string
  const movie = await getMovieById(movieId)

  return { props: { movie } }
}

export default MovieDetailPage
