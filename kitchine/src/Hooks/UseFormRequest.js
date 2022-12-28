export default function UseFormRequest() {
    return function ({ uri, method, data }) {
      return fetch(`${process.env.REACT_APP_API_URL}/${uri}`, {
        method,
        body: data,
        credentials: "include",
  
      }).then((res) => res.json());
    };
  }
  