import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
    const [isNewUser, setIsNewUser] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleToggleUser = () => {
        setIsNewUser(!isNewUser);
    };

    const handleLogin = () => {
        // Implement your login logic here
        if (email && password) {
            // For now, let's navigate to RecipeListScreen if email and password are provided
            navigation.navigate('RecipeList');
        } else {
            // Display an alert or error message if email or password is missing
            Alert.alert('Please enter email and password');
        }
        // Clear input fields
        setEmail('');
        setPassword('');
    };

    const handleSignup = () => {
        // Implement your signup logic here
        if (email && password) {
            // For now, let's show an alert for successful signup
            Alert.alert('Signed up successfully');
            // Switch back to the login form
            setIsNewUser(false);
        } else {
            // Display an alert or error message if email or password is missing
            Alert.alert('Please enter email and password');
        }
        // Clear input fields
        setEmail('');
        setPassword('');
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Food Recipe Finder</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button title={isNewUser ? "Sign Up" : "Login"} onPress={isNewUser ? handleSignup : handleLogin} />
                </View>
            </View>
            {!isNewUser && (
                <View style={styles.signupContainer}>
                    <Button title="New User?    Sign Up here" onPress={handleToggleUser} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        backgroundColor: '#f0f0f0',
        padding: 20,
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    formContainer: {
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'green',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 10,
    },
    input: {
        height: 40,
        width: 300,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 5,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
    },
    signupContainer: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
