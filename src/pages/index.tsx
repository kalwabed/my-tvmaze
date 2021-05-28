import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { Grid } from '@chakra-ui/react'

import { Container } from '../components/Container'
import DarkModeSwitch from '../components/DarkModeSwitch'
import Main from '@/components/Main'
import { Movie } from '@/types'

const MovieCard = dynamic(() => import('@/components/MovieCard'))

const HomePage = (props: { movies: Movie[] }) => {
  return (
    <Container>
      <DarkModeSwitch />
      <Main>
        <Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={8}>
          {props.movies?.map(movie => (
            <MovieCard {...movie} key={movie.id} />
          ))}
        </Grid>
      </Main>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const url = 'https://api.tvmaze.com/shows'

  const movies = await (await fetch(url)).json()

  return { props: { movies } }
}

export default HomePage
