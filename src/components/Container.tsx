import { Flex, useColorMode, FlexProps } from '@chakra-ui/react'

import DarkModeSwitch from './DarkModeSwitch'
import Main from './Main'

export const Container = (props: FlexProps) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  const color = { light: 'black', dark: 'white' }
  return (
    <Flex
      direction="column"
      minH="100vh"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    >
      <Main>
        <DarkModeSwitch />
        {props.children}
      </Main>
    </Flex>
  )
}
