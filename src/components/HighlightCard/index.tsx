import React from 'react';
import {
    Container,
    Header,
    Title,
    Icon,
    Footer,
    Amount,
    LastTransaction,
} from './styles';

interface Props {
    type: 'up' | 'down' | 'total';
    name: string;
    amount: string;
    lastTransaction: string;
}

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign',
};

export const HighlightCard = ({ type, name, amount, lastTransaction }: Props) => {
    return (
        <Container type={type}>
            <Header>
                <Title type={type}>{name}</Title>
                <Icon name={icon[type]} type={type} />
            </Header>
            <Footer>
                <Amount type={type}>{amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    );
}