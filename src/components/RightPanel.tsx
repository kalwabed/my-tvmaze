import htmr from 'htmr'
import { Box, Button, Heading, Text, VStack } from '@chakra-ui/react'

import { Movie } from '@/types'
import isDarkMode from '@/util/isDarkMode'
import { useState } from 'react'
import RatingBadge from './RatingBadge'

const months = ['Jan', 'Feb', 'March', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const dateFormatter = (date: string | number) => {
  if (typeof date === 'string') {
    const dtObj = new Date(date)
    return `${months[dtObj.getMonth()]} ${dtObj.getDate()} ${dtObj.getFullYear()}`
  }
  if (typeof date === 'number') {
    const dtObj = new Date(date * 1000)
    return `${months[dtObj.getMonth()]} ${dtObj.getDate()} ${dtObj.getFullYear()}`
  }
}

const RightPanel = ({ movie }: { movie: Movie }) => {
  const [isReadMore, setIsReadMore] = useState(false)

  return (
    <Box p={5} bgColor={isDarkMode() ? 'gray.700' : 'gray.300'} rounded="md">
      <VStack align="flex-start">
        <Heading as="h1" fontSize={['4xl', '6xl']}>
          {movie.name}
        </Heading>
        <Text fontSize="lg">Premiered: {dateFormatter(movie.premiered)}</Text>
        <Text fontSize="lg">Genres: {movie.genres.toString()}</Text>
        <Text fontSize="lg">Language: {movie.language}</Text>
        <Text fontSize="lg">
          Rating: <RatingBadge average={movie.rating.average} />
        </Text>
        <Text>Updated: {dateFormatter(movie.updated)}</Text>
        <Box>
          <Text noOfLines={isReadMore ? 0 : 4} as="summary">
            Summary: {htmr(movie.summary)}
          </Text>
          <Button hidden={isReadMore} onClick={() => setIsReadMore(true)} variant="unstyled" color="gray.300" size="sm">
            Read more
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}

export default RightPanel
