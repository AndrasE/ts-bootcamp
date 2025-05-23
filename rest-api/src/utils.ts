const crypto = require("crypto");
const util = require("util");

const hashPassword = util.promisify(crypto.pbkdf2);

crypto.pbkdf2;

export function isInteger(input: string) {
  return input?.match(/^\d+$/) ?? false;
}

export async function calculatePasswordHash(
  plainTextPassword: string,
  passwordSalt: string
) {
  const passwordhash = await hashPassword(
    plainTextPassword,
    passwordSalt,
    1000,
    64,
    "sha512"
  );

  return passwordhash.toString("hex");
}
