import { useEffect, useState } from 'react';
import apiClient from '../assets/services/api-client';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: String;
  slug: String;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setgames] = useState<Game[]>([]);
  const [erros, setErrors] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get('/games')
      .then((res) => setgames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
      });
    return () => controller.abort();
  }, []);
  return { games, erros };
};

export default useGames;
