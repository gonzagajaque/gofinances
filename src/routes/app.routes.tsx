import React from 'react';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dashboard } from '../screens/Dashboard';
import { Register } from '../screens/Register';
import { Resume } from '../screens/Resume';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {

    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: theme.colors.secondary,
                tabBarInactiveTintColor: theme.colors.text,
                tabBarLabelPosition: 'beside-icon',
                headerShown: false,
                tabBarStyle: {
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
                    height: 60
                },
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.regular
                }
            }}
        >
            <Screen
                name="Listagem"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ size, color }: any) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen
                name="Cadastrar"
                component={Register}
                options={{
                    tabBarIcon: (({ size, color }: any) => (
                        <MaterialIcons
                            name="attach-money"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen
                name="Resumo"
                component={Resume}
                options={{
                    tabBarIcon: (({ size, color }: any) => (
                        <MaterialIcons
                            name="pie-chart"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}