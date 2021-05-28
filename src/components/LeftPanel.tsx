import { Box } from '@chakra-ui/react'
import Image from 'next/image'

import isDarkMode from '@/util/isDarkMode'

const LeftPanel = ({ originalImage = '' }) => {
  return (
    <Box bgColor={isDarkMode() ? 'gray.700' : 'gray.300'} rounded="md" p={5}>
      <Image src={originalImage} width={800} height={900} />
    </Box>
  )
}

export default LeftPanel
