export default class DataStore {
  static myInstance = null;
  userid = "";

  entries = [
    {
      userid: "user1",
      imageid: 1,
      title: "My succulent is thriving",
      entry:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim sodales, venenatis libero sed, aliquet erat. Ut commodo mi sem, eu ullamcorper neque fermentum ut. Pellentesque ullamcorper laoreet ipsum, vel ultrices risus. Mauris eu.",
      category: "Succulents",
      image: require("../assets/succulents1.jpeg"),
    },
    {
      userid: "user1",
      imageid: 2,
      title: "Month 3 of nursing it back to life",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Succulents",
      image: require("../assets/foliage1.jpeg"),
    },
    {
      userid: "user2",
      imageid: 3,
      title: "Look at this baby grow",
      entry:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim sodales, venenatis libero sed, aliquet erat.",
      category: "Cactus",
      image: require("../assets/cactus1.jpeg"),
    },
  ];

  static getInstance() {
    if (DataStore.myInstance == null) {
      DataStore.myInstance = new DataStore();
    }
    return this.myInstance;
  }

  getUserID() {
    return this.userid;
  }

  setUserID(id) {
    this.userid = id;
  }

  getEntries(id) {
    return this.entries.filter((entry) => entry.userid === id);
  }

  addEntry(entry) {
    this.books.push(entry);
  }
}

// const users = [
//   {
//     id: "user1",
//     username: "Carmen Carrera",
//     email: "carmen@mail.com",
//     password: "1234",
//     image: require("../app/assets/user1.png"),
//   },
//   {
//     id: "user2",
//     username: "Tom Craig",
//     email: "tc@mail.com",
//     password: "1234",
//     image: require("../app/assets/user2.png"),
//   },
// ];
