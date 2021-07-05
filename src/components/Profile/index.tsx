import React from "react";
import { View, Text } from 'react-native';

import { styles } from './styles';
import { Avatar } from "../Avatar";

export function Profile() {
    return (        
        <View style={styles.container}>
            <Avatar urlImage={"https://github.com/guilhermexpc.png"} />
            
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Olá
                    </Text>

                    <Text style={styles.username}>
                        Usuario
                    </Text>
                </View>

                <Text style={styles.message}>
                    Demacia!!!
                </Text>
            </View>
        </View>
    );    
}