import React, { useState } from "react";
import { View, Text, TextInput} from 'react-native'

import { styles } from './styles'

export function Scenebasic(){
    const [text, setText] = useState('Testonildo')

    return(
        <View style={styles.container}>
            <Text>
                NLW Together
            </Text>
            <TextInput 
            style={styles.input}
            onChangeText={(value) => setText(value)}
            />

            <Text>
                Você digitou: { text }
            </Text>
        </View>
    )
}