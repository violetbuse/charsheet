import { Link, Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomePage() {
    return (
        <>
            <Stack.Screen options={{ title: 'Characters' }} />
            <View>
                <Text style={{ color: 'white' }}>Hello World</Text>
                <Link href="/characters" style={{ color: 'white' }}>Characters</Link>
            </View>
        </>
    )
}
