import { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Flex, Grid, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

import { getAllMovies, getMovieById } from '@/lib/tvmaze'
import { Container } from '@/components/Container'
import { Movie } from '@/types'
import LeftPanel from '@/components/LeftPanel'

import RightPanel from '@/components/RightPanel'

const MovieDetailPage = ({ movie }: { movie: Movie }) => {
  if (!movie) return null

  return (
    <Container>
      <Box textAlign="center">
        <NextLink href="/" replace passHref>
          <Link>back to home</Link>
        </NextLink>
      </Box>
      <Flex justify="center" alignItems="center">
        <Grid templateColumns={['repeat(1,1fr)', 'repeat(2,1fr)']} gap={3}>
          <LeftPanel originalImage={movie?.image?.original} />
          <RightPanel movie={movie} />
        </Grid>
      </Flex>
    </Container>
  )
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
