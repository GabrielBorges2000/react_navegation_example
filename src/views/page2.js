import { StyleSheet, Text, View } from "react-native";

export const Page2 = () => (
    <View style={styles.layout}>
        <Text style={styles.title}>Page 2</Text>
    </View>
);

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        marginBottom: 16,
    },
});