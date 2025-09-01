import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import StyledButton from '../StyledButton/StyledButton';
import {
    ButtonsContainer,
    ModalContent,
    RowInput,
    TextContent,
    TitleContent,
} from './styles';
import { theme as appTheme, theme } from '@/styles/theme';
import InputText from '../InputText/InputText';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { localStorageKeys } from '@/utils/localStorageKeys';
import { useAuth } from '@/hooks/useAuth';
import handleError from '@/utils/handleToast';
import { AddressSchema, IAddressSchema } from '@/validations/AddressSchema';
import {
    maskCardExpiry,
    maskCardNumber,
    maskCEP,
    maskNumberCvc,
} from '@/utils/masks';
import { CardSchema, ICardSchema } from '@/validations/CardSchema';

interface ModalAddCardProps {
    onConfirm: () => void;
    onClose: () => void;
    type: 'add' | 'edit';
}
const ModalAddCard = ({ onConfirm, onClose, type }: ModalAddCardProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ICardSchema>({
        mode: 'onChange',
        resolver: yupResolver(CardSchema),
    });
    const { setUser } = useAuth();
    const onSubmit: SubmitHandler<ICardSchema> = data => {
        try {
            const savedData = JSON.parse(
                localStorage.getItem(localStorageKeys.userData) || '{}',
            );
            localStorage.setItem(
                localStorageKeys.user,
                JSON.stringify({
                    id: 1,
                    name: savedData.name,
                    email: savedData.email,
                }),
            );
            setUser({
                id: 1,
                email: savedData.email,
                username: savedData.name,
                role: 'client',
            });
            onConfirm();
        } catch (error) {
            handleError(error);
        }
    };
    return (
        <Modal>
            <ModalContent onSubmit={handleSubmit(onSubmit)}>
                <TitleContent>
                    <h2>
                        {type === 'add' ? 'Adicionar Cartão' : 'Editar Cartão'}
                    </h2>
                </TitleContent>
                <TextContent>
                    <InputText
                        label="Nome"
                        placeholder="Digite o nome do cartão"
                        type="text"
                        colorText={theme.colors.primary100}
                        {...register('cardName')}
                        error={errors.cardName?.message}
                    />
                    <InputText
                        label="Número"
                        placeholder="Digite o número do cartão"
                        type="text"
                        colorText={theme.colors.primary100}
                        maskFunction={maskCardNumber}
                        {...register('cardNumber')}
                        error={errors.cardNumber?.message}
                    />
                    <RowInput>
                        <InputText
                            label="Validade"
                            placeholder="Digite a validade do cartão"
                            type="text"
                            colorText={theme.colors.primary100}
                            maskFunction={maskCardExpiry}
                            {...register('cardExpiration')}
                            error={errors.cardExpiration?.message}
                        />
                        <InputText
                            label="Código de Segurança"
                            placeholder="Digite o código de segurança"
                            type="text"
                            colorText={theme.colors.primary100}
                            maskFunction={maskNumberCvc}
                            {...register('cardCVV')}
                            error={errors.cardCVV?.message}
                        />
                    </RowInput>
                </TextContent>
                <ButtonsContainer>
                    <StyledButton
                        onClick={onClose}
                        bgColor={'bgModal'}
                        textColor={'primary100'}
                        text={'Cancelar'}
                        width="100%"
                        border={`1px solid ${appTheme.colors.primary100}`}
                        boxShadow="none"
                        fontSize="1rem"
                        height="auto"
                    />
                    <StyledButton
                        text={'Salvar'}
                        width="100%"
                        boxShadow="none"
                        fontSize="1rem"
                        height="auto"
                        type="submit"
                    />
                </ButtonsContainer>
            </ModalContent>
        </Modal>
    );
};

export default ModalAddCard;
