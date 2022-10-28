import React, { useState } from 'react';
import { ActivityIndicator, Alert, Platform } from 'react-native';
import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper
} from './styles';
import AppleSvg from '../../../src/assets/apple.svg';
import GoogleSvg from '../../../src/assets/google.svg';
import LogoSvg from '../../../src/assets/logo.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { SigninSocialButton } from '../../components/SignInSocialButton';
import { useAuth } from '../../hooks/auth';
import theme from '../../global/styles/theme';

export function SignIn() {
    //const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(false);

    const { signInWithGoogle } = useAuth();
    const { signInWithApple } = useAuth();

    async function handleSignInWithGoogle() {
        try {
            setIsLoading(true);
            return await signInWithGoogle();
            //@ts-ignore
            //navigation.navigate('Dashboard');
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Google');
            setIsLoading(false);
        }
    }

    async function handleSignInWithApple() {
        try {
            setIsLoading(true);
            return await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Apple');
            setIsLoading(false);
        }
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg width={RFValue(150)} height={RFValue(80)} />
                    <Title>Controle suas{'\n'}finanças de forma{'\n'}muito simples</Title>
                </TitleWrapper>
                <SignInTitle>Faça seu login com{'\n'}uma das contas abaixo</SignInTitle>
            </Header>
            <Footer>
                <FooterWrapper>
                    <SigninSocialButton
                        title="Entrar com Google"
                        svg={GoogleSvg}
                        onPress={handleSignInWithGoogle}
                    />
                    {Platform.OS === 'ios' && (
                        <SigninSocialButton
                            title="Entrar com Apple"
                            svg={AppleSvg}
                            onPress={handleSignInWithApple}
                        />
                    )}
                </FooterWrapper>
                {isLoading &&
                    <ActivityIndicator
                        color={theme.colors.shape}
                        style={{ marginTop: 18 }} />
                }
            </Footer>
        </Container>
    )
}