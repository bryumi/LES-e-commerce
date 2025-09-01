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
import {
    IChangePassword,
    ChangePasswordSchema,
} from '@/validations/LoginSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { localStorageKeys } from '@/utils/localStorageKeys';
import { useAuth } from '@/hooks/useAuth';
import handleError from '@/utils/handleToast';

interface ModalChangePasswordProps {
    onConfirm: () => void;
    onClose: () => void;
}
const ModalChangePassword = ({
    onConfirm,
    onClose,
}: ModalChangePasswordProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IChangePassword>({
        mode: 'onChange',
        resolver: yupResolver(ChangePasswordSchema),
    });
    const { setUser } = useAuth();
    const onSubmit: SubmitHandler<IChangePassword> = data => {
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
                    <h2>Alterar senha</h2>
                </TitleContent>
                <TextContent>
                    <InputText
                        label="Senha"
                        placeholder="Digite sua senha"
                        type="password"
                        colorText={theme.colors.primary100}
                        {...register('oldPassword')}
                        error={errors.oldPassword?.message}
                    />
                    <InputText
                        label="Nova Senha"
                        placeholder="Digite sua nova senha"
                        type="password"
                        colorText={theme.colors.primary100}
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <InputText
                        label="Confirmação de Senha"
                        placeholder="Confirme sua senha"
                        type="password"
                        colorText={theme.colors.primary100}
                        {...register('confirmPassword')}
                        error={errors.confirmPassword?.message}
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

export default ModalChangePassword;
