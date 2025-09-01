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
import { userAdmin } from '@/data/user';
import handleError from '@/utils/handleToast';
import { useRouter } from 'next/navigation';

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
    const router = useRouter();
    const { setUser } = useAuth();
    const onSubmit: SubmitHandler<ILoginForm> = data => {
        try {
            const admin = userAdmin.find(user => user.email === data.email);
            const savedData = JSON.parse(
                localStorage.getItem(localStorageKeys.userData) || '{}',
            );
            if (admin) {
                localStorage.setItem(
                    localStorageKeys.user,
                    JSON.stringify({
                        id: admin.id,
                        name: admin.username,
                        email: admin.email,
                        role: 'admin',
                    }),
                );
                setUser({
                    id: admin.id,
                    email: admin.email,
                    username: admin.username,
                    role: 'admin',
                });
                onConfirm();
                router.push('/meu-perfil');
                return;
            }
            localStorage.setItem(
                localStorageKeys.user,
                JSON.stringify({
                    id: 1,
                    name: savedData.name,
                    email: savedData.email,
                    role: 'client',
                }),
            );
            setUser({
                id: Math.floor(Math.random() * 1000),
                email: savedData.email,
                username: savedData.name,
                role: 'client',
            });
            onConfirm();
            router.push('/meu-perfil');
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
