import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function GitHubWebView() {
    const router = useRouter();

    return (
        <View style={{ flex: 1 }}>
            {/* Header com botão de voltar */}
            <View style={{ 
                backgroundColor: '#f8f9fa', 
                padding: 16, 
                paddingTop: 50,
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#e1e4e8'
            }}>
                <TouchableOpacity 
                    onPress={() => router.back()}
                    style={{
                        backgroundColor: '#0366d6',
                        paddingHorizontal: 16,
                        paddingVertical: 8,
                        borderRadius: 6
                    }}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>← Voltar</Text>
                </TouchableOpacity>
                <Text style={{ 
                    marginLeft: 16, 
                    fontSize: 18, 
                    fontWeight: 'bold',
                    color: '#24292e'
                }}>
                    GitHub - Luiz Ricardo
                </Text>
            </View>

            {/* WebView */}
            <WebView 
                source={{ uri: 'https://github.com/LuizWKM' }}
                style={{ flex: 1 }}
                startInLoadingState={true}
                scalesPageToFit={true}
            />
        </View>
    );
}
