import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import StyledButton from '../StyledButton/StyledButton';
import {
    ButtonsContainer,
    ModalContent,
    TextContent,
    TitleContent,
} from './styles';
import { theme as appTheme, theme } from '@/styles/theme';
import InputText from '../InputText/InputText';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginForm, LoginSchema } from '@/validations/LoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { localStorageKeys } from '@/utils/localStorageKeys';
import { useAuth } from '@/hooks/useAuth';
import { mockUsers } from '@/data/user';
import handleError from '@/utils/handleToast';

interface ModalLoginProps {
    onConfirm: () => void;
    onClose: () => void;
}
const ModalLogin = ({ onConfirm, onClose }: ModalLoginProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({
        resolver: yupResolver(LoginSchema),
    });
    const { setUser } = useAuth();
    const onSubmit: SubmitHandler<ILoginForm> = data => {
        try {
            const user = mockUsers.find(user => user.email === data.email);
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
                    <h2>Entrar</h2>
                </TitleContent>
                <TextContent>
                    <InputText
                        label="E-mail"
                        placeholder="Digite seu e-mail"
                        colorText={theme.colors.primary100}
                        {...register('email')}
                        error={errors.email?.message}
                    />
                    <InputText
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password"
                        colorText={theme.colors.primary100}
                        {...register('password')}
                        error={errors.password?.message}
                    />
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
                        text={'Entrar'}
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

export default ModalLogin;
