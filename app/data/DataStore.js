export default class DataStore {
  static myInstance = null;
  userID = "";

  entries = [
    {
      userid: 1,
      imageid: 1,
      title: "My succulent is thriving",
      entry:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim sodales, venenatis libero sed, aliquet erat. Ut commodo mi sem, eu ullamcorper neque fermentum ut. Pellentesque ullamcorper laoreet ipsum, vel ultrices risus. Mauris eu.",
      category: "Succulents",
      image: require("../app/assets/succulents1.jpeg"),
    },
    {
      userid: 1,
      imageid: 2,
      title: "Month 3 of nursing it back to life",
      entry:
        "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
      category: "Succulents",
      image: require("../app/assets/foliage.jpeg"),
    },
  ];
}

// users = [
//     {
//         userid: 1,
//         username: "Carmen",
//         useremail: "carmen@gmail.com",
//         password: "1234",
//         profileimage: require("../assets/user1.jpeg"),
//         {
//             images: {

//             }
//         }
//     }
// ]
