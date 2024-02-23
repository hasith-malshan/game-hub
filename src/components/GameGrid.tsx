import React, { useEffect, useState } from 'react';
import apiClient from '../assets/services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
  id: number;
  name: String;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setgames] = useState<Game[]>([]);
  const [erros, setErrors] = useState([]);

  useEffect(() => {
    apiClient
      .get('/games')
      .then((res) => setgames(res.data.results))
      .catch((err) => setErrors(err.message));
  });

  return (
    <>
      {erros && <Text>{erros}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
