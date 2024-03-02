import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatform';
import { Platform } from '../hooks/useGames';
interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const Platformselector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data.map((Platform) => (
          <MenuItem
            key={Platform.id}
            onClick={() => onSelectPlatform(Platform)}
          >
            {Platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Platformselector;
