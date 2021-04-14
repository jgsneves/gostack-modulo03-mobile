import { useFonts } from 'expo-font';
import React from 'react';
import {RectButtonProperties} from 'react-native-gesture-handler';
import {ButtonText, Container} from './styles';

interface IButtonProps extends RectButtonProperties {
    children: string;
}

export const Button: React.FC<IButtonProps> = ({children, ...rest}) => {
    const [loaded] = useFonts({
        RobotoSladMedium: require('../../../assets/RobotoSlab-Medium.ttf')
    });

    if (!loaded) return null;
    return (
        <Container {...rest}>
            <ButtonText style={{fontFamily: 'RobotoSladMedium'}}>{children}</ButtonText>
        </Container>
    );
}