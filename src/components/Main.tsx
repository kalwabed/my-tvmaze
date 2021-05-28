import { Stack, StackProps } from '@chakra-ui/react'

const Main = (props: StackProps) => (
  <Stack as="main" spacing="1.5rem" width="100%" maxWidth="container.xl" pt="3rem" px="1rem" {...props} />
)

export default Main
