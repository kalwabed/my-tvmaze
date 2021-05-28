import { GetStaticPaths, GetStaticProps } from 'next'
import { Box, Flex } from '@chakra-ui/react'

import { getAllMovies, getMovieById } from '@/lib/tvmaze'
import { Container } from '@/components/Container'
import isDarkMode from '@/util/isDarkMode'

const MovieDetailPage = () => {
  return (
    <Container>
      <Flex justify="center" alignItems="center">
        <Box p={5} bgColor={isDarkMode() ? 'gray.700' : 'gray.300'} rounded="md">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia alias culpa, quae harum vel distinctio dolorum
          quos. Recusandae hic, velit repudiandae itaque quam praesentium molestias, necessitatibus fugiat ullam, sit
          dicta!
        </Box>
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
