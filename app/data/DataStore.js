export default class DataStore {
  static myInstance = null;
  userid = "";

  entries = [
    //user1 entries
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
      userid: "user1",
      imageid: 3,
      title: "Happy and vibrant",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Cactus",
      image: require("../assets/cactus1.jpeg"),
    },

    {
      userid: "user1",
      imageid: 4,
      title: "In bloom! ",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Flowers",
      image: require("../assets/flowers1.jpeg"),
    },

    {
      userid: "user1",
      imageid: 5,
      title: "Oh boy, here we go again :(",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Herbs",
      image: require("../assets/herbs1.jpeg"),
    },

    {
      userid: "user1",
      imageid: 6,
      title: "My happy place",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Foliage2",
      image: require("../assets/foliage2.jpeg"),
    },

    {
      userid: "user1",
      imageid: 7,
      title: "She keeps growing more beautiful",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Hanging",
      image: require("../assets/hanging1.jpeg"),
    },

    {
      userid: "user1",
      imageid: 8,
      title: "Prickly little thing",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Cactus",
      image: require("../assets/cactus2.jpeg"),
    },

    {
      userid: "user1",
      imageid: 9,
      title: "These babies came home today",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Succulents",
      image: require("../assets/succulents2.jpeg"),
    },

    //user2 entries

    {
      userid: "user2",
      imageid: 10,
      title: "She keeps on growing",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Flowers",
      image: require("../assets/flowers2.jpeg"),
    },

    {
      userid: "user2",
      imageid: 11,
      title: "Look at her grow. I'm in awe",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Flowers",
      image: require("../assets/hanging2.jpeg"),
    },
    {
      userid: "user2",
      imageid: 13,
      title: "The smell is amazing",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Flowers",
      image: require("../assets/herbs2.jpeg"),
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
