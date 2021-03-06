const GetDataFromApi = () => {
  return fetch(
    '//rickandmortyapi.com/api/character'
  )
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          species: character.species,
          image: character.image,
          status: character.status,
          episode: character.episode,
          origin: character.origin.name,
        };
      });
    });
};

export default GetDataFromApi;
