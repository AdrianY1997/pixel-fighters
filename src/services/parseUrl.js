export default function parseUrl(url) {
  const route = `http://${process.env.BASE_PATH}:${process.env.PORT}${url}`;
  console.log(route);
  return route;
}
