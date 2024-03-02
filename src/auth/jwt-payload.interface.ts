export interface JwtPayload {
  sub: string;
  name: string;
  [key: string]: any;
}
