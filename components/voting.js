import * as React from 'react';
import { Text, View, StyleSheet, Pressable, Image } from 'react-native';

export default function Voting() {
  return (
    <View style={styles.votingContainer}>
      <View style={styles.cards}>
        <View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg',
              }}
            />

            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>

            <Pressable style={styles.voteBtn}>
              <Text style={{ color: '#fff' }}>Vote</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg',
              }}
            />

            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>

            <Pressable style={styles.voteBtn}>
              <Text style={{ color: '#fff' }}>Vote</Text>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://decider.com/wp-content/uploads/2022/02/The-Worst-Person-in-the-World.jpg?quality=75&strip=all&w=1200',
              }}
            />

            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>

            <Pressable style={styles.voteBtn}>
              <Text style={{ color: '#fff' }}>Vote</Text>
            </Pressable>
          </View>{' '}
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={{
                uri: 'https://m0.her.ie/wp-content/uploads/2018/01/07093633/GettyImages-887815620.jpg',
              }}
            />

            <View style={styles.description}>
              <Text>La paix</Text>
              <Text>Technical director</Text>
            </View>

            <Pressable style={styles.voteBtn}>
              <Text style={{ color: '#fff' }}>Vote</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  votingContainer: {
    width: '100%',
  },
  cards: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  card: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
    borderWidth: '2',
    borderColor: 'grey',
    padding: 20,
  },
  voteBtn: {
    backgroundColor: 'blue',
    fontWeight: '800',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  cardImage: {
    height: 60,
    width: 60,
    borderRadius: '50%',
  },
  description: {
    marginHorizontal: 20,
    fontWeight: '800',
  },
});
