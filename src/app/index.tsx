import { Image } from "expo-image";
import { useRouter } from 'expo-router';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from "react-native";
import PressableComponent from "../components/Pressable";
import TouchableOpacityComponent from "../components/TouchableOpacity";

export default function Index() {
    const router = useRouter();
    
    return (
        /* JSX - HTML Javascript */
        <ScrollView style={styles.container}>
            <View style={styles.mainContent}>

                {/* Header com gradiente visual */}
                <View style={styles.header}>
                    <Image 
                        source="https://github.com/LuizWKM.png" 
                        style={styles.profileImage} 
                    />
                    <Text style={styles.nameText}>Luiz Ricardo</Text>
                    <Text style={styles.subtitleText}>Desenvolvedor Mobile</Text>
                </View>

                {/* Seção de botões */}
                <View style={styles.buttonSection}>
                    <View style={styles.buttonWrapper}>
                        <Button 
                            title="Clique aqui" 
                            color={styles.primaryButton.backgroundColor} 
                            onPress={() => Alert.alert("Info", "Muito obrigado por clicar! 🎉")} 
                        />
                    </View>

                    <View style={styles.buttonWrapper}>
                        <Button 
                            title='🌐 Abrir GitHub' 
                            color={styles.githubButton.backgroundColor} 
                            onPress={() => router.push('./github')} 
                        />
                    </View>

                    {/* TouchableOpacity Component */}
                    <TouchableOpacityComponent></TouchableOpacityComponent>

                    {/* Pressable Component */}
                    <PressableComponent></PressableComponent>
                </View>
            
            </View>
        </ScrollView>
    )
}

// 🎨 Estilos personalizados com design moderno
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    mainContent: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 32,
        gap: 24,
    },
    header: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 32,
        borderRadius: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 12,
        elevation: 8,
        marginBottom: 8,
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 4,
        borderColor: '#007AFF',
        marginBottom: 16,
    },
    nameText: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitleText: {
        fontSize: 18,
        color: '#6c757d',
        fontWeight: '500',
        textAlign: 'center',
    },
    buttonSection: {
        gap: 16,
    },
    buttonWrapper: {
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    primaryButton: {
        backgroundColor: '#1a1a1a',
    },
    githubButton: {
        backgroundColor: '#0366d6',
    },
    cardSection: {
        marginTop: 8,
    },
});