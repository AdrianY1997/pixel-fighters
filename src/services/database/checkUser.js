import Cookies from "js-cookie";
import { verify } from "jsonwebtoken";

/*export default async function checkUser() {
  const token = verify(Cookies.get("authToken"), process.env.JWT_TOKEN, {
    complete: true,
  });

  console.log(token);

  return {
    isLogged: true,
    isAdmin: false,
  };
}*/
