import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function ItemPage1() {
  return (
    <View style={styles.container}>
      <View style={styles.Iconone}>
        <AntDesign name="arrowleft" size={25} color="black" />
      </View>

      <View style={styles.Icontwo}>
        <AntDesign name="shoppingcart" size={24} color="#736ef0" />
      </View>

      <View style={styles.Iconthree}>
        <AntDesign name="hearto" size={25} color="#845EC2" />
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("./assets/denimTruckerJacket.jpg")}
        />
      </View>

      <Text style={styles.header}>Denim Trucker Jacket</Text>
      <View style={styles.reviewContainer}>
        <Text>Reviews :</Text>
        <View style={styles.starIcons}>
          <Entypo name="star" size={17} color="#faba5a" />
          <Entypo name="star" size={17} color="#faba5a" />
          <Entypo name="star" size={17} color="#faba5a" />
          <Entypo name="star" size={17} color="#faba5a" />
          <Entypo name="star" size={17} color="#aaaaaa" />
        </View>
      </View>
      <View style={styles.reviewLine}></View>

      <Text style={styles.statement}>
        It is a long established fact that a reader will be distracted by the
        readable content of a page.
      </Text>

      <View style={styles.materialContainer}>
        <Text style={styles.materialText}>
          Material : 91% polyester, 8% elastane
        </Text>
      </View>

      <View style={styles.sizeContainer}>
        <TouchableOpacity style={styles.oneLetterSizeButton}>
          <Text>XS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.oneLetterSizeButton]}>
          <Text>S</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.oneLetterSizeButton, styles.mediumSize]}
        >
          <Text>M</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.oneLetterSizeButton}>
          <Text>L</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.oneLetterSizeButton}>
          <Text>XL</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.addContainer}>
        <View>
          <Text style={styles.totaltext}>Total Amount</Text>
          <Text style={styles.totalValue}>$80</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addbuttontext}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: "#f7f5ff",
    paddingTop: 30,
  },

  Iconone: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 2,
    marginTop: 20,
    marginLeft: 10,
  },

  Icontwo: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 300,
    marginTop: 20,
    position: "absolute",
    zIndex: 2,
  },

  Iconthree: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    marginTop: 80,
    zIndex: 2,
    marginLeft: 300,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    height: 150,
    width: 170,
    borderRadius: 20,
    marginLeft: 10,
    position: "relative",
  },

  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 12,
  },
  reviewContainer: {
    flexDirection: "row",
  },

  starIcons: {
    flexDirection: "row",
    marginLeft: 5,
  },

  materialContainer: {
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: "#fff",
  },
  materialText: {
    color: "#9370DB",
  },

  statement: {
    marginTop: 20,
    lineHeight: 30,
    fontWeight: "bold",
  },

  sizeContainer: {
    flexDirection: "row",
    marginBottom: 20,
    color: "black",
  },
  oneLetterSizeButton: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 15,
  },
  mediumSize: {
    backgroundColor: "#9370DB",
  },

  addContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#9370DB",
    borderRadius: 15,
  },
  addButton: {
    marginLeft: 100,
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: "#8A2BE2",
    borderRadius: 10,
  },
  addbuttontext: {
    color: "#fff",
  },
  totaltext: {
    color: "#fff",
  },

  totalValue: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold",
  },

  reviewLine: {
    paddingVertical: 2,
    backgroundColor: "#8A2BE2",
    width: 50,
    borderRadius: 10,
    marginTop: 10,
  },
});
