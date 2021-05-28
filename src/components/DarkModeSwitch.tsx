import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, Switch, HStack } from '@chakra-ui/react'

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  return (
    <HStack spacing="5px" justify="center" alignItems="center">
      <SunIcon />
      <Switch color="green" isChecked={isDark} onChange={toggleColorMode} />
      <MoonIcon />
    </HStack>
  )
}

export default DarkModeSwitch
