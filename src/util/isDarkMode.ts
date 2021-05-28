import { useColorMode } from '@chakra-ui/react'

const isDarkMode = () => {
  const { colorMode } = useColorMode()
  return colorMode === 'dark'
}

export default isDarkMode
