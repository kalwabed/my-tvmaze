import { StarIcon } from '@chakra-ui/icons'
import { Badge, Flex } from '@chakra-ui/react'

const RatingBadge = ({ average = 0 }) => {
  return (
    <Badge colorScheme="blue">
      <Flex alignItems="center">
        <span>{average}</span>
        <StarIcon h={2} />
      </Flex>
    </Badge>
  )
}

export default RatingBadge
