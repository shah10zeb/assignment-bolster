import * as bcrypt from 'bcrypt';

export async function encodePassword(password: string) {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hash(password, SALT);
}

export async function comparePassword(password: string, hash: string) {
  console.log('password', password, 'hash', hash);
  return bcrypt.compare(password, hash);
}
