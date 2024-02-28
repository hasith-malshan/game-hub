import useData from '../hooks/useData';
import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => {
  const { data } = useData<Genre>('/genres');

  return (
    <>
      <ul>
        {data.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
