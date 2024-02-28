import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatform';

const Platformselector = () => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Platforms
      </MenuButton>
      <MenuList>
        {data.map((Platform) => (
          <MenuItem key={Platform.id}>{Platform.name}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Platformselector;
