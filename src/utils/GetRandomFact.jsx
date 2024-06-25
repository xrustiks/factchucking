const GetRandomFact = async (category) => {
  const url = category
    ? `https://api.chucknorris.io/jokes/random?category=${category}`
    : "https://api.chucknorris.io/jokes/random";

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default GetRandomFact;
