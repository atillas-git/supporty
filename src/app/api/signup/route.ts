import User from "@/models/User";
import { TUser } from "@/types/TUser";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as TUser;
    const existsingUser = await User.findOne({
      email: body.email,
    });
    if (existsingUser) {
      return new Response("User already exists! Please login!", {
        status: 400,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);
    const userToRegister = new User({
      name: body.name,
      email: body.email,
      username: body.username,
      password: hashedPassword,
    });
    await userToRegister.save();
    return new Response(
      JSON.stringify({
        ...body,
        password: null,
      }),
      {
        status: 200,
      },
    );
  } catch (error) {
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
}
