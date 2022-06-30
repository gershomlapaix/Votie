import * as React from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";

export default function Voting({ navigation }) {
  return (
    <View style={styles.votingContainer}>
      <View style={styles.cards}>
        <View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://decider.com/wp-content/uploads/2022/02/The-Worst-Person-in-the-World.jpg?quality=75&strip=all&w=1200",
              }}
            />

            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>

            <Pressable
              style={styles.voteBtn}
              onPress={() => {
                navigation.navigate("Results");
              }}
            >
              <Text style={{ color: "#fff" }}>Vote</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg",
              }}
            />

            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>

            <Pressable style={styles.voteBtn}>
              <Text style={{ color: "#fff" }}>Vote</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://decider.com/wp-content/uploads/2022/02/The-Worst-Person-in-the-World.jpg?quality=75&strip=all&w=1200",
              }}
            />

            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>

            <Pressable style={styles.voteBtn}>
              <Text style={{ color: "#fff" }}>Vote</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D",
              }}
            />

            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>

            <Pressable style={styles.voteBtn}>
              <Text style={{ color: "#fff" }}>Vote</Text>
            </Pressable>
          </View>
        </View>

        <Text style={{ fontWeight: "800", fontSize: 16 }}>
          You will view the results after voting
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  votingContainer: {
    width: "100%",
  },
  cards: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  card: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: "#d7d9db",
    padding: 20,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity:0.1,
    shadowRadius:5
  },
  voteBtn: {
    backgroundColor: "blue",
    fontWeight: "800",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: "50%",
  },
  description: {
    marginHorizontal: 20,
    fontWeight: "800",
  },
});
