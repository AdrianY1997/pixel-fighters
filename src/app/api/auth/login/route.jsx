import { prisma } from "@/services/database/client";
import jwt from "jsonwebtoken";
import { serialize } from "cookie";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();

  const user = await prisma.user.findFirst({
    where: {
      AND: {
        user_email: email,
        user_password: password,
      },
    },
  });

  const token = jwt.sign(
    {
      user: user.user_name,
      email: user.user_email,
    },
    process.env.JWT_TOKEN,
    { expiresIn: "30d" }
  );

  const date = new Date();
  date.setDate(date.getDate() + 30);

  const serialized = serialize("authToken", token, {
    httpOnly: true,
    expires: date,
  });

  return Response.json("Haz iniciado sesión correctamente", {
    headers: new Headers({
      "Set-Cookie": serialized,
    }),
  });
}
