export class Admin {
  constructor(public username: string, public password: string) {}

  isValid(): boolean {
    return this.username.length > 0 && this.password.length >= 8;
  }
}
