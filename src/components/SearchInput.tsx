import {
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
} from '@chakra-ui/react';
import { BsSearch } from 'react-icons/bs';

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<BsSearch></BsSearch>} />
      <Input borderRadius={20} placeholder="Search Games" variant="filled" />
    </InputGroup>
  );
};

export default SearchInput;
