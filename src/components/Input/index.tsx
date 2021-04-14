import React from 'react';
import {Container, TextInput} from './styles';
import {TextInputProps} from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/Feather';

interface IinputProps extends TextInputProps {
    name: string;
    icon: string;
}

export const Input: React.FC<IinputProps> = ({name, icon, placeholder}) => {
    const [loaded] = useFonts({
        RobotoRegular: require('../../../assets/RobotoSlab-Regular.ttf'),
    });

    return (
        <Container>
            <Icon name={icon} size={20} color="#666360"/>
            <TextInput 
                keyboardAppearance="dark"
                placeholder={placeholder}
                style={{fontFamily: 'RobotoRegular'}} 
                placeholderTextColor="#666360"
                />
        </Container>
    );
}