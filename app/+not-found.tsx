import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View>
      <Text style={{ color: 'white' }}>Not Found</Text>
      <Link href="/" style={{ color: 'white' }}>Go to home screen</Link>
    </View>
  );
}