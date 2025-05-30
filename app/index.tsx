import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomePage() {
    return (
        <>
            <Stack.Screen options={{ title: 'Characters' }} />
            <View>
                <Text>Hello World</Text>
            </View>
        </>
    )
}
