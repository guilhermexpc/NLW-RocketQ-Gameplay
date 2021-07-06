import React from "react";
import { Text, Image, View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { RectButton, RectButtonProperties } from 'react-native-gesture-handler'

import { styles } from "./styles";
import DiscordImg from '../../assets/discord.png'

type Propriedade = TouchableOpacityProps & {
    tittle : string;
    tittleOptional? : string 
}

type Props = RectButtonProperties & {
    tittle : string;
}

export function ButtonIcon({ tittle, ...rest } : Props){
    return(
        <RectButton 
            style={styles.container}
            {...rest}    
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { tittle}  
            </Text>
        </RectButton>
    );
}