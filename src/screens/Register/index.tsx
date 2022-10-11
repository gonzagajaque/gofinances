import React, { useState } from 'react';
import { Modal } from 'react-native';
import { Container, Header, Title, Form, Fields, TransactionsTypes } from './styles';
import { Input } from '../../components/Forms/Input';
import { Button } from '../../components/Forms/Button';
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton';
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton';
import { CategorySelect } from '../CategorySelect';

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });

    function handleTransactionTypeSelect(type: 'up' | 'down') { setTransactionType(type) }

    function handleOpenSelectCategoryModal() { setCategoryModalOpen(true) }

    function handleCloseSelectCategoryModal() { setCategoryModalOpen(false) }

    function handleRegister() {
        const data = {
            name,
            amount,
            transactionType,
            category: category.key,
        }
        console.log(data);
    }

    return (
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <Input
                        placeholder="Nome"
                        onChangeText={text => setName(text)}
                    />
                    <Input
                        placeholder="Preço"
                        onChangeText={value => setAmount(Number(value))}
                    />
                    <TransactionsTypes>
                        <TransactionTypeButton
                            type='up'
                            title='Income'
                            onPress={() => handleTransactionTypeSelect('up')}
                            isActive={transactionType === 'up'}
                        />
                        <TransactionTypeButton
                            type='down'
                            title='Outcome'
                            onPress={() => handleTransactionTypeSelect('down')}
                            isActive={transactionType === 'down'}
                        />
                    </TransactionsTypes>
                    <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal} />
                </Fields>
                <Button
                    title="Enviar"
                    onPress={handleRegister}
                />
            </Form>
            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </Container>
    );
}