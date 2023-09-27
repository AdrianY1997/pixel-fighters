import { verify } from "jsonwebtoken";

export async function GET(request) {
  const { authToken } = request.cookies;

  if (authToken) {
    const user = verify(authToken, process.env.JWT_TOKEN);
  }
  return Response.json({});
}
