import { StyleSheet, Text, View, Pressable } from "react-native";

function SingleItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "#5e0acc" }}
      onPress={props.delete.bind(this, props.id)}
    >
      <View>
        <Text style={styles.singleGoal}> {props.text} </Text>
      </View>
    </Pressable>
  );
}
export default SingleItem;

const styles = StyleSheet.create({
  singleGoal: {
    backgroundColor: "#cccccc",
    margin: 5,
    padding: 7,
    borderRadius: 5,
    fontSize: 15,
  },
});
