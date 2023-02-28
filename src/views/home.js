import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
    return (
        <View style={styles.layout}>
            <Text style={styles.title}>Home</Text>
            <Text style={[styles.title, { fontSize: 20, textAlign: 'center' }]}>Simple Project about Navigation with React-Navigation.</Text>
        </View>
    );
};

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