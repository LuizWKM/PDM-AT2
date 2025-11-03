import { Alert, Text, TouchableOpacity, StyleSheet} from "react-native";
export default function TouchableOpacityComponent(){                    
    return(
        <TouchableOpacity 
        style={styles.touchableOpacity}
        onPress={() => Alert.alert('TouchableOpacity', 'Você clicou no TouchableOpacity! 👆')}
        activeOpacity={0.8}
        >
        <Text style={styles.touchableText}>
            🎯 TouchableOpacity
        </Text>
    </TouchableOpacity>
)
}

const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: '#28a745',
        paddingVertical: 18,
        paddingHorizontal: 24,
        borderRadius: 16,
        alignItems: 'center',
        shadowColor: '#28a745',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
        borderWidth: 1,
        borderColor: '#20c997',
    },
    touchableText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: 0.5,
    }
});