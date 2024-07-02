import JWT from "jsonwebtoken";
import { User } from "@prisma/client";
import { prismaClient } from "../clients/db";

const JWT_SECRET = "$uper@1234.";

class JWTService {
  public static generateTokenForUser(user: User) {
    const payLoad={
        id:user?.id,
        email:user?.email,
    };

    const token=JWT.sign(payLoad,JWT_SECRET);
    return token;
  }
}

export default JWTService;