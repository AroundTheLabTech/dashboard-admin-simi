import { Admin } from "@/domain/auth/admin";

export class AuthService {
  login(admin: Admin): boolean {
    const validAdmins = [{ username: "admin", password: "password123" }];

    return validAdmins.some(
      (validAdmin) =>
        validAdmin.username === admin.username &&
        validAdmin.password === admin.password
    );
  }
}
