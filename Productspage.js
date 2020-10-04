import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Productspage() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.icon}>
          <AntDesign name="arrowleft" size={24} color="black" />
        </View>
        <View style={styles.icon}>
          <AntDesign name="shoppingcart" size={24} color="#736ef0" />
        </View>
      </View>

      <View>
        <Text style={styles.header}>Women's Jacket</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder="Search Jacket                         "
        />
        <TouchableOpacity>
          <Text style={styles.filter}>Filter</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={require("./assets/blackjacket1.jpg")}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productHeader}>Black Leather Jacket</Text>
          <View style={styles.starIcons}>
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#aaaaaa" />
          </View>
          <Text style={styles.price}>$99</Text>
        </View>
      </View>

      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={require("./assets/denimTruckerJacket.jpg")}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productHeader}>Denim Trucker Jacket</Text>
          <View style={styles.starIcons}>
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#aaaaaa" />
            <Entypo name="star" size={17} color="#aaaaaa" />
          </View>
          <Text style={styles.price}>$80</Text>
        </View>
      </View>

      <View style={styles.productContainer}>
        <Image
          style={styles.image}
          source={require("./assets/redleather.jpg")}
        />
        <View style={styles.productInfo}>
          <Text style={styles.productHeader}>Red Leather Jacket</Text>
          <View style={styles.starIcons}>
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
          </View>
          <Text style={styles.price}>$100</Text>
        </View>
      </View>

      <View style={styles.productContainer}>
        <Image style={styles.image} source={require("./assets/flannel.jpg")} />
        <View style={styles.productInfo}>
          <Text style={styles.productHeader}>Flannel Hoody</Text>
          <View style={styles.starIcons}>
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#faba5a" />
            <Entypo name="star" size={17} color="#aaaaaa" />
          </View>
          <Text style={styles.price}>$140</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
    paddingHorizontal: 20,
    backgroundColor: "#f7f5ff",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 30,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 20,
    marginTop: 20,
    borderRadius: 15,
    backgroundColor: "#fff",
  },

  filter: {
    alignSelf: "flex-end",
    marginTop: -30,
    marginRight: 20,
    color: "#9370DB",
    fontWeight: "bold",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  productHeader: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 5,
  },
  starIcons: {
    flexDirection: "row",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#736ef0",
    marginTop: 10,
  },
  productContainer: {
    flexDirection: "row",
    marginTop: 30,
  },
  productInfo: {
    justifyContent: "center",
    marginLeft: 20,
  },
});
