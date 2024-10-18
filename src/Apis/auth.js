import constant from "../constant/constant";

// Api for signup 
const signup = async (username, password) => {
  const response = await fetch(`${constant.url}/api/auth/signup`, {
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
  return json;
};

// api for signin
const signin = async (username, password) => {
  const response = await fetch(`${constant.url}/api/auth/signin`, {
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
  return json;
};

export { signup, signin };
