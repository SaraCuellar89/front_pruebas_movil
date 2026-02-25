import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from "../App";

type navigationProp = NativeStackNavigationProp<RootStackParamList, "Inicio_Sesion">;

const Tarjeta_Perfil = () => {

    const navigation = useNavigation<navigationProp>();

    return(
        <View style={styles.card}>
            <Text style={styles.nombre}>Nombre Usuario</Text>

            <TouchableOpacity style={styles.botonPrimario} onPress={() => navigation.navigate('Editar_Perfil')}>
                <Text style={styles.textoBotonPrimario}>Editar Perfil</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botonSecundario}>
                <Text style={styles.textoBotonSecundario}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#ffffff",
        padding: 20,
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 8, // Android
        margin: 20,
    },
    nombre: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    botonPrimario: {
        backgroundColor: "#4A90E2",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginBottom: 12,
        width: "100%",
        alignItems: "center",
    },
    textoBotonPrimario: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
    botonSecundario: {
        backgroundColor: "#f5f5f5",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 12,
        width: "100%",
        alignItems: "center",
    },
    textoBotonSecundario: {
        color: "#e63946",
        fontWeight: "600",
        fontSize: 16,
    },
});

export default Tarjeta_Perfil;