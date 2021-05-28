import { Flex, Input } from '@chakra-ui/react'

const SearchMovie = ({ value, setValue }: { value: string; setValue: (val: string) => void }) => {
  return (
    <Flex justify="center" alignItems="center">
      <Input
        placeholder="Search movie (e.g Flash)"
        w={['100%', '70%', '50%']}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Flex>
  )
}

export default SearchMovie
