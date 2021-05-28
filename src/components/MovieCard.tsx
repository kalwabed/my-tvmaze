import { Box, Flex, Text, VStack, Heading, Link as ChakraLink, HStack, Badge, useColorMode } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon } from '@chakra-ui/icons'
import htmr from 'htmr'

import { Movie } from '@/types'

const MovieCard = (props: Movie) => {
  const { image, name, id, genres, summary, language, rating } = props
  const { colorMode } = useColorMode()

  return (
    <Box rounded="md" bgColor={colorMode === 'light' ? 'gray.200' : 'gray.700'} shadow="base" _hover={{ shadow: 'md' }}>
      <VStack alignItems="start">
        <Box roundedTop="md" overflow="hidden">
          <Image src={image.medium} width={400} height={450} />
        </Box>
        <Flex px={3} pb={4} direction="column">
          <Text as="small" color="gray.500">
            {language}
          </Text>
          <HStack spacing="10px">
            <Link href={`/${id}`}>
              <a>
                <Heading fontSize="2xl" _hover={{ color: 'teal.500' }}>
                  {name}
                </Heading>
              </a>
            </Link>
            <Badge colorScheme="blue">
              <Flex alignItems="center">
                <span>{rating.average}</span>
                <StarIcon h={2} />
              </Flex>
            </Badge>
          </HStack>
          <Text as="small">{genres.toString()}</Text>
          <Text mt={3} noOfLines={3}>
            {htmr(summary)}
          </Text>

          <Link href={`/${id}`} passHref>
            <ChakraLink color="teal.500" mt="2">
              More detail
            </ChakraLink>
          </Link>
        </Flex>
      </VStack>
    </Box>
  )
}

export default MovieCard
