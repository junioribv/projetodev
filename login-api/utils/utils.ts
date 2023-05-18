import bcrypt from "bcrypt";

export const generateHash = (password: string): string => {
  const salt: string = bcrypt.genSaltSync(10);
  const hashedPassword: string = bcrypt.hashSync(password, salt);

  return hashedPassword;
};

export const comparePassword = (password: string, passwordHash: string): boolean => {
  return bcrypt.compareSync(password, passwordHash);
};
