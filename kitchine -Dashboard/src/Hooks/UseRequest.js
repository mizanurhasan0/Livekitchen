export default function UseRequest() {
  return function ({ uri, method, data }) {
    return fetch(`${process.env.REACT_APP_API_URL}/${uri}`, {
      method,
      body: JSON.stringify(data),
      credentials: "include",

      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };
}
