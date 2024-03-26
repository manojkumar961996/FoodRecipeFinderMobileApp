import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from './HomeScreen';

describe('HomeScreen', () => {
    test('renders correctly', () => {
        const { getByText, getByPlaceholderText } = render(<HomeScreen />);

        expect(getByText('Food Recipe Finder')).toBeTruthy();
        expect(getByPlaceholderText('Enter your email')).toBeTruthy();
        expect(getByPlaceholderText('Enter your password')).toBeTruthy();
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('New User?    Sign Up here')).toBeTruthy();
    });

    test('allows user to toggle between login and signup forms', () => {
        const { getByText, getByPlaceholderText } = render(<HomeScreen />);

        fireEvent.press(getByText('New User?    Sign Up here'));
        expect(getByText('Sign Up')).toBeTruthy();
        expect(getByText('Login')).not.toBeTruthy();

        fireEvent.press(getByText('Login'));
        expect(getByText('Login')).toBeTruthy();
        expect(getByText('Sign Up')).not.toBeTruthy();
    });

    test('handles login correctly', () => {
        const { getByText, getByPlaceholderText } = render(<HomeScreen />);

        fireEvent.changeText(getByPlaceholderText('Enter your email'), 'test@example.com');
        fireEvent.changeText(getByPlaceholderText('Enter your password'), 'password');
        fireEvent.press(getByText('Login'));

        // Add your assertions here based on the expected behavior after login
    });

    test('handles signup correctly', () => {
        const { getByText, getByPlaceholderText } = render(<HomeScreen />);

        fireEvent.changeText(getByPlaceholderText('Enter your email'), 'test@example.com');
        fireEvent.changeText(getByPlaceholderText('Enter your password'), 'password');
        fireEvent.press(getByText('New User?    Sign Up here'));
        fireEvent.press(getByText('Sign Up'));

        // Add your assertions here based on the expected behavior after signup
    });
});
