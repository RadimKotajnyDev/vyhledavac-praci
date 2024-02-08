import {Box, Flex, Input, Select, Tag, TagCloseButton, TagLabel, Text, Wrap, WrapItem} from "@chakra-ui/react";
import {useState} from "react";

export const SearchTags = () => {

  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim() !== '') {
      setTags([...tags, inputValue.trim()]);
      setInputValue('');
    }
  };

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <>
      <Box w="full" borderRadius="md"
           p={3} border="1px" borderColor='gray.600'>
        <Text fontSize="xl">Tagy</Text>
        <Flex flexDirection="column" w="300px">
          <Input
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder="Sem napište tagy (klíčové slova)"
          />
          <Wrap mt={2}>
            {tags.map((tag, index) => (
              <WrapItem key={index}>
                <Tag
                  size="md"
                  borderRadius="full"
                  variant="subtle"
                  colorScheme="blue"
                >
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => removeTag(index)}/>
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Box>
    </>
  )
}