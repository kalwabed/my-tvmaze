import htmr from 'htmr'
import { Box, Button, css, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { useState } from 'react'

import { Movie } from '@/types'
import isDarkMode from '@/util/isDarkMode'
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

const paragraphSpacing = css({ p: { marginTop: '8px' } })

const RightPanel = ({ movie }: { movie: Movie }) => {
  const [isReadMore, setIsReadMore] = useState(false)

  return (
    <Box p={5} bgColor={isDarkMode() ? 'gray.700' : 'gray.300'} rounded="md">
      <VStack align="flex-start">
        <Heading as="h1" fontSize={['4xl', '5xl', '6xl']}>
          {movie.name}
        </Heading>
        <HStack fontSize="lg">
          <Text fontWeight="bold">Premiered: </Text>
          <Text>{dateFormatter(movie.premiered)}</Text>
        </HStack>
        <HStack fontSize="lg">
          <Text fontWeight="bold">Genres: </Text>
          <Text>{movie.genres.toString()}</Text>
        </HStack>
        <HStack fontSize="lg">
          <Text fontWeight="bold">Language: </Text>
          <Text>{movie.language}</Text>
        </HStack>
        <HStack fontSize="lg">
          <Text fontWeight="bold">Rating: </Text>
          <RatingBadge average={movie.rating.average} />
        </HStack>
        <HStack fontSize="lg">
          <Text fontWeight="bold">Status: </Text>
          <Text>{movie.status}</Text>
        </HStack>
        <HStack fontSize="lg">
          <Text fontWeight="bold">Updated: </Text>
          <Text>{dateFormatter(movie.updated)}</Text>
        </HStack>
        <Box>
          {/* <Text fontWeight="bold">Summary: </Text> */}
          <Box noOfLines={isReadMore ? 0 : 4} as="article" css={paragraphSpacing}>
            {htmr(movie.summary)}
          </Box>
          <Button
            hidden={isReadMore}
            onClick={() => setIsReadMore(true)}
            variant="unstyled"
            colorScheme="gray"
            size="sm"
          >
            Read more
          </Button>
        </Box>
      </VStack>
    </Box>
  )
}

export default RightPanel
