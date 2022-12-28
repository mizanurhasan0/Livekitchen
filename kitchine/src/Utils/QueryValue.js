
export default function getQueryValue(search,paramName) {
  const query = new URLSearchParams(search);
  const paramField = query.get(paramName);
  return paramField;
}
