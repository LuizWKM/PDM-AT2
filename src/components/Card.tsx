import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type propsCard = {
    title: string,
    body: string,
    href: any
}

export default function Card({title, body, href} : propsCard) {
    return(
        <View style={styles.cardContainer}>
            <Link href={href} style={styles.linkContainer}>
                <Text style={styles.cardTitle}>🎯 {title}</Text>
            </Link>
            <Text style={styles.cardBody}>{body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#e9ecef',
        padding: 20,
        borderRadius: 16,
        gap: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    linkContainer: {
        textDecorationLine: 'none',
    },
    cardTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#007AFF',
        marginBottom: 4,
    },
    cardBody: {
        fontSize: 16,
        color: '#6c757d',
        lineHeight: 24,
    },
});