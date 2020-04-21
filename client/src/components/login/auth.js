class Auth {
  constructor() {
    this.authenticated = false;
    this.adminAuthenticated = false;
  }

  login(cb) {
    this.authenticated = true;
    cb();
  }
  adminLogin(cb) {
    this.adminAuthenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    this.adminAuthenticated = false;
    cb();
  }
  isAuthenticated() {
    return this.authenticated;
  }
  isAdminAuthenticated() {
    return this.adminAuthenticated;
  }
}

export default new Auth();
