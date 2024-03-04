import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CreticScopre from './CreticScopre';
import getCroppedImageURL from '../services/image-url';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={'space-between'} marginTop={1}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CreticScopre score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
