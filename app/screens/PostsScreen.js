import React from "react";

import { FlatList, StyleSheets, View } from "react-native";

import AppColors from "../config/AppColors";
import AppCard from "../components/AppCard";

//TEST DATA
entries = [
  {
    userid: 1,
    imageid: 1,
    title: "My succulent is thriving",
    entry:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu enim sodales, venenatis libero sed, aliquet erat. Ut commodo mi sem, eu ullamcorper neque fermentum ut. Pellentesque ullamcorper laoreet ipsum, vel ultrices risus. Mauris eu.",
    category: "Succulents",
    image: require("../assets/succulents1.jpeg"),
  },
  {
    userid: 1,
    imageid: 2,
    title: "Month 3 of nursing it back to life",
    entry:
      "Integer ut urna urna. Vestibulum hendrerit auctor dui, non ultricies nulla feugiat laoreet. Proin venenatis nibh vel quam gravida, a tristique erat commodo. Nam varius sapien non mi hendrerit consectetur at et odio. Duis vel justo quis dui.",
    category: "Succulents",
    image: require("../assets/foliage1.jpeg"),
  },
];

function PostsScreen(props) {
  return (
    <View>
      <FlatList
        data={entries}
        keyExtractor={(item) => item.imageid}
        renderItem={({ item }) => (
          <AppCard title={item.title} image={item.image} entry={item.entry} />
        )}
      />
    </View>
  );
}

export default PostsScreen;
