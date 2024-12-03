import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
    const [text, setText] = useState("");

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://<SEU_EC2_IP>:8000/core/api/user-input/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text }),
            });

            if (response.ok) {
                Alert.alert('Success', 'Data saved successfully!');
                setText('');
            } else {
                Alert.alert('Error', 'Failed to save data.');
            }
        } catch (error) {
            Alert.alert('Error', 'Network error.');
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter some text"
                value={text}
                onChangeText={setText}
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 20, marginTop: 50 },
    input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});

export default App;