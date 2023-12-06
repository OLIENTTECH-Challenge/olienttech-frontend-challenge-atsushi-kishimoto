import { sign as honoJwtSign, verify as honoJwtVerify } from 'hono/jwt';
import { JWT_SECRET } from '../constants/env';

export type JwtPayload = {
  sub: string;
  role: string;
};

export const sign = (payload: JwtPayload) => honoJwtSign(payload, JWT_SECRET);
export const verify = async (token: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const payload: JwtPayload = await honoJwtVerify(token, JWT_SECRET);
  return payload;
};