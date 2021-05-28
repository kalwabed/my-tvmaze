import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Grid } from '@chakra-ui/react'

import { Container } from '../components/Container'
import { Movie } from '@/types'
import { getAllMovies } from '@/lib/tvmaze'
import SearchMovie from '@/components/SearchMovie'

const MovieCard = dynamic(() => import('@/components/MovieCard'))

const HomePage = (props: { movies: Movie[] }) => {
  const [searchValue, setSearchValue] = useState('')

  const filteredMovies =
    searchValue?.length >= 2
      ? props.movies.filter(movie => movie.name.toLowerCase().includes(searchValue.toLowerCase()))
      : props.movies

  return (
    <Container>
      <SearchMovie setValue={setSearchValue} value={searchValue} />
      <Grid gridTemplateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} gap={8}>
        {filteredMovies?.map((movie, i) => i <= 51 && <MovieCard {...movie} key={movie.id} />)}
      </Grid>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const movies = await getAllMovies()

  return { props: { movies } }
}

export default HomePage
