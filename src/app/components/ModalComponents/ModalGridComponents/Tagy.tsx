import { Box, Flex, Input, Tag, TagCloseButton, TagLabel, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { useState, ChangeEvent, KeyboardEvent } from "react";

const Tagy = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
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
        p={5} border="1px" _dark={{ borderColor: "gray.600" }}
        _light={{ borderColor: "gray.200" }}>
        <Text fontSize="xl" mb={3}>Tagy</Text>
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
                  colorScheme="teal"
                >
                  <TagLabel>{tag}</TagLabel>
                  <TagCloseButton onClick={() => removeTag(index)} />
                </Tag>
              </WrapItem>
            ))}
          </Wrap>
        </Flex>
      </Box>
    </>
  )
}

export default Tagy;
