import { RFValue } from 'react-native-responsive-fontsize';
import { AnyStyledComponent } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(113)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 19px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
    width: 100%;
    padding: ${RFValue(15)}px;
    flex-direction: row;
    align-items: center;
    background-color: ${({ theme, isActive }) =>
        isActive ? theme.colors.secondary_light : theme.colors.background};
`;

export const Icon = styled(Feather as unknown as AnyStyledComponent)`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
    width: 100%;
    padding: 24px;
`;