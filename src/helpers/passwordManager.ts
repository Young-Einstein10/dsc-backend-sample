import bcrypt from "bcrypt";

const hash = (password: string, salt: number): string =>
  bcrypt.hashSync(password, salt);

const comparePassword = (password: string, hashed: string): boolean =>
  bcrypt.compareSync(password, hashed);

export { hash, comparePassword };
