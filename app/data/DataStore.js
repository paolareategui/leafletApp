export default class DataStore {
  static myInstance = null;
  userid = "";

  entries = [
    //user1 entries
    {
      userid: "user1",
      entryid: 1,
      title: "My succulent is thriving",
      entry:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim sodales, venenatis libero sed, aliquet erat. Ut commodo mi sem, eu ullamcorper neque fermentum ut.",
      category: "Succulents",
      catid: 1,
      image: require("../assets/succulents1.jpeg"),
      date: "Mon Mar 07 2022",
    },
    {
      userid: "user1",
      entryid: 2,
      title: "Month 3 of nursing it back to life",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Foliage",
      catid: 5,
      image: require("../assets/foliage1.jpeg"),
      date: "Fri Mar 09 2022",
    },

    {
      userid: "user1",
      entryid: 3,
      title: "Happy and vibrant",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Cactus",
      image: require("../assets/cactus1.jpeg"),
      catid: 6,
      date: "Sat Mar 12 2022",
    },

    {
      userid: "user1",
      entryid: 4,
      title: "In bloom! ",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Flowers",
      image: require("../assets/flowers1.jpeg"),
      catid: 2,
      date: "Mon Mar 14 2022",
    },

    {
      userid: "user1",
      entryid: 5,
      title: "Oh boy, here we go again :(",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Herbs",
      image: require("../assets/herbs1.jpeg"),
      catid: 4,
      date: "Tue Mar 15 2022",
    },

    {
      userid: "user1",
      entryid: 6,
      title: "My happy place",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Foliage2",
      image: require("../assets/foliage2.jpeg"),
      catid: 5,
      date: "Fri Mar 18 2022",
    },

    {
      userid: "user1",
      entryid: 7,
      title: "She keeps growing more beautiful",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Hanging",
      image: require("../assets/hanging1.jpeg"),
      catid: 3,
      date: "Wed Mar 23 2022",
    },

    {
      userid: "user1",
      entryid: 8,
      title: "Prickly little thing",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Cactus",
      image: require("../assets/cactus2.jpeg"),
      catid: 6,
      date: "Sat Mar 26 2022",
    },

    {
      userid: "user1",
      entryid: 9,
      title: "These babies came home today",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Succulents",
      image: require("../assets/succulents2.jpeg"),
      catid: 1,
      date: "Mon Apr 18 2022",
    },

    //user2 entries

    {
      userid: "user2",
      entryid: 10,
      title: "She keeps on growing",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Flowers",
      image: require("../assets/flowers2.jpeg"),
      catid: 2,
      date: "Fri Mar 18 2022",
    },

    {
      userid: "user2",
      entryid: 11,
      title: "Look at her grow. I'm in awe",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Hanging",
      image: require("../assets/hanging2.jpeg"),
      catid: 3,
      date: "Mon Mar 27 2022",
    },
    {
      userid: "user2",
      entryid: 13,
      title: "The smell is amazing",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Herbs",
      image: require("../assets/herbs2.jpeg"),
      catid: 4,
      date: "Tue Mar 01 2022",
    },
  ];

  //create an instance of the data store
  static getInstance() {
    if (DataStore.myInstance == null) {
      DataStore.myInstance = new DataStore();
    }
    return this.myInstance;
  }

  // get the current user's ID
  getUserID() {
    return this.userid;
  }

  //Save the current user's ID
  setUserID(id) {
    this.userid = id;
  }

  //Retrieve the current user's posts
  getEntries(id) {
    return this.entries.filter((entry) => entry.userid === id);
  }

  //Post a new entry
  addEntry(entry) {
    this.entries.push(entry);
  }

  //Delete an entry
  deleteEntry(id) {
    //Find the object index
    const entryIndex = this.entries.findIndex((entry) => entry.entryid === id);
    console.log("The entry index", entryIndex);
    //Remove object at given index
    this.entries.splice(entryIndex, 1);
  }

  logout() {
    this.myInstance = null;
    console.log("Instance of class is:", this.myInstance);
    console.log("logging out");
  }
}
