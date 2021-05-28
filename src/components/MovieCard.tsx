import { Box, Flex, Img, Text, VStack, Heading } from '@chakra-ui/react'
import Image from 'next/image'

import { Movie } from '@/types'

const MovieCard = (props: Movie) => {
  const { image, name } = props

  return (
    <Box rounded="md" bgColor="gray.200">
      <VStack spacing="5px" alignItems="start">
        <Box roundedTop="md" bgColor="blue.500" overflow="hidden">
          <Image src={image.medium} width={400} height={400} />
        </Box>
        <Box p={3}>
          <Heading fontSize="2xl">{name}</Heading>
        </Box>
      </VStack>
    </Box>
  )
}

export default MovieCard
