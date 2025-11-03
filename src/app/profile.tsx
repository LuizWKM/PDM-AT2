import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Modal,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

interface ProfileData {
    nome: string;
    sobrenome: string;
    idade: string;
    instituicao: string;
    curso: string;
}

const STORAGE_KEY = '@profile_data';

export default function Profile() {
    const [profileData, setProfileData] = useState<ProfileData>({
        nome: '',
        sobrenome: '',
        idade: '',
        instituicao: '',
        curso: '',
    });
    const [modalVisible, setModalVisible] = useState(false);
    const [editData, setEditData] = useState<ProfileData>({
        nome: '',
        sobrenome: '',
        idade: '',
        instituicao: '',
        curso: '',
    });

    // Carregar dados do AsyncStorage ao iniciar
    useEffect(() => {
        loadProfileData();
    }, []);

    const loadProfileData = async () => {
        try {
            const data = await AsyncStorage.getItem(STORAGE_KEY);
            if (data) {
                const parsedData = JSON.parse(data);
                setProfileData(parsedData);
            }
        } catch (error) {
            console.error('Erro ao carregar dados:', error);
            Alert.alert('Erro', 'Não foi possível carregar os dados do perfil');
        }
    };

    const handleEdit = () => {
        setEditData(profileData);
        setModalVisible(true);
    };

    const handleSave = async () => {
        // Validação básica
        if (!editData.nome || !editData.sobrenome) {
            Alert.alert('Atenção', 'Por favor, preencha ao menos Nome e Sobrenome');
            return;
        }

        if (editData.idade && isNaN(Number(editData.idade))) {
            Alert.alert('Atenção', 'A idade deve conter apenas números');
            return;
        }

        try {
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(editData));
            setProfileData(editData);
            setModalVisible(false);
            Alert.alert('Sucesso! 🎉', 'Perfil atualizado com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar dados:', error);
            Alert.alert('Erro', 'Não foi possível salvar os dados');
        }
    };

    const InfoCard = ({ icon, label, value }: { icon: string; label: string; value: string }) => (
        <View style={styles.infoCard}>
            <View style={styles.infoHeader}>
                <Ionicons name={icon as any} size={24} color="#007AFF" />
                <Text style={styles.infoLabel}>{label}</Text>
            </View>
            <Text style={styles.infoValue}>{value || 'Não informado'}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                {/* Header do Perfil */}
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <Ionicons name="person-circle" size={100} color="#007AFF" />
                    </View>
                    <Text style={styles.nameText}>
                        {profileData.nome && profileData.sobrenome
                            ? `${profileData.nome} ${profileData.sobrenome}`
                            : 'Seu Nome'}
                    </Text>
                    {profileData.curso && (
                        <Text style={styles.courseText}>{profileData.curso}</Text>
                    )}
                </View>

                {/* Informações do Perfil */}
                <View style={styles.infoSection}>
                    <Text style={styles.sectionTitle}>📋 Informações Pessoais</Text>
                    
                    <InfoCard icon="person" label="Nome" value={profileData.nome} />
                    <InfoCard icon="person-outline" label="Sobrenome" value={profileData.sobrenome} />
                    <InfoCard icon="calendar" label="Idade" value={profileData.idade} />
                    <InfoCard icon="school" label="Instituição" value={profileData.instituicao} />
                    <InfoCard icon="book" label="Curso" value={profileData.curso} />
                </View>

                {/* Botão de Editar */}
                <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                    <Ionicons name="create" size={24} color="#ffffff" />
                    <Text style={styles.editButtonText}>Editar Perfil</Text>
                </TouchableOpacity>

                {/* Modal de Edição */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={styles.modalContainer}
                    >
                        <View style={styles.modalContent}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                {/* Header do Modal */}
                                <View style={styles.modalHeader}>
                                    <Text style={styles.modalTitle}>✏️ Editar Perfil</Text>
                                    <TouchableOpacity
                                        onPress={() => setModalVisible(false)}
                                        style={styles.closeButton}
                                    >
                                        <Ionicons name="close" size={28} color="#6c757d" />
                                    </TouchableOpacity>
                                </View>

                                {/* Formulário */}
                                <View style={styles.form}>
                                    <View style={styles.inputGroup}>
                                        <Text style={styles.inputLabel}>Nome *</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Digite seu nome"
                                            value={editData.nome}
                                            onChangeText={(text) => setEditData({ ...editData, nome: text })}
                                            placeholderTextColor="#adb5bd"
                                        />
                                    </View>

                                    <View style={styles.inputGroup}>
                                        <Text style={styles.inputLabel}>Sobrenome *</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Digite seu sobrenome"
                                            value={editData.sobrenome}
                                            onChangeText={(text) => setEditData({ ...editData, sobrenome: text })}
                                            placeholderTextColor="#adb5bd"
                                        />
                                    </View>

                                    <View style={styles.inputGroup}>
                                        <Text style={styles.inputLabel}>Idade</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Digite sua idade"
                                            value={editData.idade}
                                            onChangeText={(text) => setEditData({ ...editData, idade: text })}
                                            keyboardType="numeric"
                                            maxLength={3}
                                            placeholderTextColor="#adb5bd"
                                        />
                                    </View>

                                    <View style={styles.inputGroup}>
                                        <Text style={styles.inputLabel}>Instituição</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Digite sua instituição"
                                            value={editData.instituicao}
                                            onChangeText={(text) => setEditData({ ...editData, instituicao: text })}
                                            placeholderTextColor="#adb5bd"
                                        />
                                    </View>

                                    <View style={styles.inputGroup}>
                                        <Text style={styles.inputLabel}>Curso</Text>
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Digite seu curso"
                                            value={editData.curso}
                                            onChangeText={(text) => setEditData({ ...editData, curso: text })}
                                            placeholderTextColor="#adb5bd"
                                        />
                                    </View>
                                </View>

                                {/* Botões do Modal */}
                                <View style={styles.modalButtons}>
                                    <TouchableOpacity
                                        style={styles.cancelButton}
                                        onPress={() => setModalVisible(false)}
                                    >
                                        <Text style={styles.cancelButtonText}>Cancelar</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.saveButton}
                                        onPress={handleSave}
                                    >
                                        <Ionicons name="checkmark" size={24} color="#ffffff" />
                                        <Text style={styles.saveButtonText}>Salvar</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        </View>
                    </KeyboardAvoidingView>
                </Modal>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 24,
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
        marginBottom: 24,
    },
    avatarContainer: {
        marginBottom: 16,
    },
    nameText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 8,
        textAlign: 'center',
    },
    courseText: {
        fontSize: 16,
        color: '#6c757d',
        fontWeight: '500',
        textAlign: 'center',
    },
    infoSection: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1a1a1a',
        marginBottom: 16,
    },
    infoCard: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 3,
        borderLeftWidth: 4,
        borderLeftColor: '#007AFF',
    },
    infoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6c757d',
        marginLeft: 8,
        textTransform: 'uppercase',
        letterSpacing: 0.5,
    },
    infoValue: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1a1a1a',
        marginLeft: 32,
    },
    editButton: {
        backgroundColor: '#007AFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 16,
        shadowColor: '#007AFF',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
        marginBottom: 24,
    },
    editButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingTop: 24,
        paddingHorizontal: 24,
        paddingBottom: 40,
        maxHeight: '90%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
        elevation: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    modalTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#1a1a1a',
    },
    closeButton: {
        padding: 4,
    },
    form: {
        marginBottom: 24,
    },
    inputGroup: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    input: {
        backgroundColor: '#f8f9fa',
        borderWidth: 2,
        borderColor: '#e9ecef',
        borderRadius: 12,
        padding: 16,
        fontSize: 16,
        color: '#1a1a1a',
        fontWeight: '500',
    },
    modalButtons: {
        flexDirection: 'row',
        gap: 12,
    },
    cancelButton: {
        flex: 1,
        backgroundColor: '#e9ecef',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
    },
    cancelButtonText: {
        color: '#6c757d',
        fontSize: 16,
        fontWeight: 'bold',
    },
    saveButton: {
        flex: 1,
        backgroundColor: '#28a745',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        borderRadius: 12,
        shadowColor: '#28a745',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 6,
    },
    saveButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});
