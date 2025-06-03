import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View>
      <Text>Not Found</Text>
      <Link href="/">Go to home screen</Link>
    </View>
  );
}