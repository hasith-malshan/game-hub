import useGenres, { Genre } from '../hooks/useGenres';

const GenreList = () => {
  const { data, isLoading, erros } = useGenres();

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
