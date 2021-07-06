import React, { useState } from "react";
import { View, Text, Image} from 'react-native';
import { useNavigation } from "@react-navigation/native";

import { ButtonIcon } from "../../components/Buttonicon";
import { styles } from './styles'

import IllustrationImg from '../../assets/illustration.png';


export function SignIn(){

    const navigation = useNavigation();

    function HandleSignIn() {
        navigation.navigate('Home');
    }

    return(
        <View style={styles.container}>            
            <Image 
                source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch"
            />    

            <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {'\n'} e organize suas {'\n'}jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {'\n'}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon 
                        tittle="Entrar com Discord"
                        onPress={HandleSignIn}
                        // activeOpacity={0.7}
                    />
            </View>

            

           
        </View>
    )
}