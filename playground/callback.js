let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Indra Kusuma'
  };

  setTimeout(() => {
    callback(user)
  }, 3000);
};

getUser(1997, (userObject) => {
  console.log(userObject);
});