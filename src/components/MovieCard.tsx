import { Box, Flex, Text, VStack, Heading, Link as ChakraLink, HStack } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import htmr from 'htmr'
import { memo } from 'react'

import { Movie } from '@/types'
import isDarkMode from '@/util/isDarkMode'
import RatingBadge from './RatingBadge'

const MovieCard = (props: Movie) => {
  const { image, name, id, genres, summary, language, rating } = props

  return (
    <Box rounded="md" bgColor={isDarkMode() ? 'gray.700' : 'gray.100'} shadow="base" _hover={{ shadow: 'md' }}>
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
            <RatingBadge average={rating.average} />
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

export default memo(MovieCard)
