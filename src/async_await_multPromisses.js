const getUsers = async (users) => {
  const url = users.map((user) => fetch(`https://api.github.com/users/${user}`)
    .then((resp) => resp.json()));
  const promises = await Promise.all(url);

  // eslint-disable-next-line no-console
  console.log(promises);
};

getUsers([]);
