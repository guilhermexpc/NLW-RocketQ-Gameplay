import React, { useState } from "react";
import { View, Text, Image, StatusBar} from 'react-native';

import { ButtonIcon } from "../../components/Buttonicon";
import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png'


export function SignIn(){
    return(
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            
            <Image 
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />    

            <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {`\n`} e organize suas {`\n`}jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon 
                        tittle="Entrar com Discord"
                        activeOpacity={0.7}
                    />
            </View>

            

           
        </View>
    )
}