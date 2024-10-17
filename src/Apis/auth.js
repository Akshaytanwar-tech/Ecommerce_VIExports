const signup = async (username, password) => {
  const response = await fetch(`http://localhost:5000/api/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const json = await response.json();
  console.log(json);
  return json;
};
const signin = async (username, password) => {
  const response = await fetch(`http://localhost:5000/api/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });
  const json = await response.json();
  console.log(json);
  return json;
};

export { signup, signin };
