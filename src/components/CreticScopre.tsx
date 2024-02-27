import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CreticScopre = ({ score }: Props) => {
  let color = score > 75 ? 'green' : 'yello';

  return (
    <Badge fontSize="14px" padding={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CreticScopre;
