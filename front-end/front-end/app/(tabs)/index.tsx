import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
    const [inputText, setInputText] = useState('');

    const handleSubmit = () => {
        fetch('http://192.168.0.14:8000/core/api/user-input/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ input_text: inputText }),
        })
        .then(response => response.json())
        .then(data => alert(data.message || data.error))
        .catch(error => alert("Erro: " + error));
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite algo..."
                onChangeText={setInputText}
            />
            <Button title="Enviar" onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20 },
    input: { borderBottomWidth: 1, marginBottom: 20, padding: 10 },
});
