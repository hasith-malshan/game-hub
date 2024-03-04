import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
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
        <Heading fontSize={'2xl'} marginBottom={3}>
          Genres
        </Heading>
        {data.map((data) => (
          <ListItem key={data.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={'cover'}
                src={data.image_background}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                fontWeight={data.id === selectedGenre?.id ? 'bold' : 'normal'}
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
