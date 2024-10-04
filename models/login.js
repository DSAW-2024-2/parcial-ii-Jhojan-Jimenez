class authModel {
  static getAuth(credentials) {
    if (!bodyFormat(credentials)) {
      throw new Error("Invalid body format");
    }
    const { email, password } = credentials;
    if (email !== "admin@admin.com" || password !== "admin") {
      throw new Error("Invalid email or password");
    }
    return true;
  }
}
function bodyFormat(body) {
  return (
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    "password" in body
  );
}
module.exports = authModel;
