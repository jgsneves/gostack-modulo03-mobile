import React from 'react';
import {Text, Image} from 'react-native';
import { Container, Title } from './styles';
import {useFonts} from 'expo-font';

import logoImg from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

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
            <Input icon="mail" name="email" placeholder="E-mail"/>
            <Input icon="lock" name="password" placeholder="Senha"/>
            <Button onPress={() => {console.log("teste")}}>Entrar</Button>
        </Container>
    );
}