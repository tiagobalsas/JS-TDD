const getData = async () => {
  const response = await fetch('https://willianjusten.com.br/search.json');
  const data = await response.json();
  // eslint-disable-next-line no-console
  return data.map((titles) => console.log(titles.title));
};

getData();
