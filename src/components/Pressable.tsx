import { Alert, Pressable, Text, StyleSheet } from "react-native";
export default function PressableComponent(){
    return(
        <Pressable
            style={({ pressed }) => [
                styles.pressable,
                pressed && styles.pressablePressed
            ]}
            onPress={() => Alert.alert('Pressable', 'Você pressionou o Pressable! 🔥')}
            onLongPress={() => Alert.alert('Long Press', 'Você segurou o Pressable! ⏳')}
        >
            {({ pressed }) => (
                <Text style={[styles.pressableText, pressed && styles.pressableTextPressed]}>
                    {pressed ? '⚡ Pressionado!' : '🚀 Pressable'}
                </Text>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pressable: {
        backgroundColor: '#fd7e14',
        paddingVertical: 18,
        paddingHorizontal: 24,
        borderRadius: 16,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#e85a00',
        shadowColor: '#fd7e14',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    pressablePressed: {
        backgroundColor: '#dc3545',
        borderColor: '#bd2130',
        transform: [{ scale: 0.98 }],
    },
    pressableText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    },
    pressableTextPressed: {
        opacity: 0.9,
    },
    cardSection: {
        marginTop: 8,
    },
});