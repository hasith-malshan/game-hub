import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading)
    return (
      <>
        <SkeletonText paddingY={3} />
        <SkeletonText paddingY={3} />
        <SkeletonText paddingY={3} />
        <SkeletonText paddingY={3} />
        <SkeletonText paddingY={3} />
      </>
    );

  return (
    <>
      <List>
        {data.map((data) => (
          <ListItem key={data.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={data.image_background}
              />
              <Button
                onClick={() => {
                  onSelectGenre(data);
                  console.log(data.name);
                }}
                fontSize={'large'}
                variant="link"
              >
                {' '}
                {data.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
