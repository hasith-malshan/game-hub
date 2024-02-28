import {
  Box,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => {
  const { data, isLoading, erros } = useGenres();

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
              <Text fontSize={'large'}> {data.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
