import { Box, Flex, Img, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'

import { Movie } from '@/types'

const MovieCard = (props: Movie) => {
  const { image, name } = props

  return (
    <VStack spacing=".75rem" rounded="md" p="4">
      <Box roundedTop="md" bgColor="blue.500">
        <Img src={image.medium} width={400} height={400} roundedTop="md" />
      </Box>
      <Text>{name}</Text>
    </VStack>
  )
}

export default MovieCard
