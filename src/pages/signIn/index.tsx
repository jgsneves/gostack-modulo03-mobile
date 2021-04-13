import React from 'react';
import {Text, Image} from 'react-native';
import { Container, Title } from './styles';
import {useFonts} from 'expo-font';

import logoImg from '../../assets/logo.png';

export const SignIn: React.FC = () => {

    const [loaded] = useFonts({
        RobotoSlab: require('../../../assets/RobotoSlab-Medium.ttf'),
    });

    if (!loaded) { 
        return null;
    }
    return(
        <Container>
            <Image source={logoImg}/>
            <Title style={{fontFamily: 'RobotoSlab'}}>Faça seu login</Title>
        </Container>
    );
}