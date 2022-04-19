export default class UserDataStore {
  static myInstance = null;

  //Users
  users = [
    {
      userid: "user1",
      username: "Carmen Carrera",
      email: "c@m.com",
      password: "1234",
      image: require("../assets/user1.png"),
    },
    {
      userid: "user2",
      username: "Tom Craig",
      email: "tc@mail.com",
      password: "1234",
      image: require("../assets/user2.png"),
    },
  ];

  //Create an instance of the user data
  static getInstance() {
    if (UserDataStore.myInstance == null) {
      UserDataStore.myInstance = new UserDataStore();
    }
    return this.myInstance;
  }

  //Get all the users
  validate(email, password) {
    return (
      this.users.filter(
        (user) => user.email === email && user.password === password
      ).length > 0
    );
  }

  getUser(email) {
    return this.users.find((user) => user.email === email);
  }

  //Post a new entry
  addUser(user) {
    this.users.push(user);
  }
}
