import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By :
        </MenuButton>
        <MenuList>
          <MenuItem>Relavance</MenuItem>
          <MenuItem>Date Added</MenuItem>
          <MenuItem>Name</MenuItem>
          <MenuItem>Released date</MenuItem>
          <MenuItem>Poularity</MenuItem>
          <MenuItem>Average Ratings</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
