import { NewCharacterButton } from "@/components/new_character";
import { useCharacters } from "@/hooks/data/useCharacters";
import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomePage() {

    const characters = useCharacters()

    console.log(characters)

    return (
        <>
            <Stack.Screen options={{ title: 'Characters' }} />
            <View>
                <Text>Hello World</Text>
                <NewCharacterButton />
            </View>
        </>
    )
}
