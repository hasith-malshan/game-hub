import { useEffect, useState } from 'react';
import apiClient from '../assets/services/api-client';
import { CanceledError } from 'axios';

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreesponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [erros, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);
    apiClient
      .get<FetchGenreesponse>('/genres')
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErrors(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { genres, erros, isLoading };
};

export default useGenres;
