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
import { maskCEP } from '@/utils/masks';

interface ModalAddAddressProps {
    onConfirm: () => void;
    onClose: () => void;
    type: 'add' | 'edit';
}
const ModalAddAddress = ({
    onConfirm,
    onClose,
    type,
}: ModalAddAddressProps) => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        trigger,
        formState: { errors },
    } = useForm<IAddressSchema>({
        mode: 'onChange',
        resolver: yupResolver(AddressSchema),
    });
    const getCepData = async (cep: string) => {
        try {
            const response = await fetch(
                `https://viacep.com.br/ws/${cep}/json/`,
            );
            const data = await response.json();
            if (data) {
                setValue('address', data.logradouro);
                setValue('neighborhood', data.bairro);
                setValue('city', data.localidade);
                setValue('state', data.uf);
                trigger(['address', 'neighborhood', 'city', 'state']);
            }
        } catch (error) {
            handleError(error);
        }
    };
    const handleCepInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        let numericValue = getValues('zipCode');
        numericValue = numericValue.replace('-', '');
        if (numericValue.length === 8) {
            getCepData(numericValue);
        } else {
            setValue('address', '');
            setValue('neighborhood', '');
            setValue('city', '');
            setValue('state', '');
            trigger(['address', 'neighborhood', 'city', 'state']);
        }
    };
    const { setUser } = useAuth();
    const onSubmit: SubmitHandler<IAddressSchema> = data => {
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
                        {type === 'add'
                            ? 'Adicionar Endereço'
                            : 'Editar Endereço'}
                    </h2>
                </TitleContent>
                <TextContent>
                    <RowInput>
                        <InputText
                            label="Apelido do local"
                            placeholder="Digite o apelido do local"
                            type="text"
                            colorText={theme.colors.primary100}
                            {...register('nickname')}
                            error={errors.nickname?.message}
                        />
                        <InputText
                            label="Cep"
                            placeholder="Digite o cep"
                            type="text"
                            colorText={theme.colors.primary100}
                            maskFunction={maskCEP}
                            {...register('zipCode', {
                                onChange: handleCepInput,
                            })}
                            error={errors.zipCode?.message}
                        />
                    </RowInput>
                    <RowInput>
                        <InputText
                            label="Estado"
                            placeholder="Digite o estado"
                            type="text"
                            colorText={theme.colors.primary100}
                            {...register('state')}
                            error={errors.state?.message}
                        />
                        <InputText
                            label="Cidade"
                            placeholder="Digite a cidade"
                            type="text"
                            colorText={theme.colors.primary100}
                            {...register('city')}
                            error={errors.city?.message}
                        />
                    </RowInput>
                    <RowInput>
                        <InputText
                            label="Bairro"
                            placeholder="Digite o bairro"
                            type="text"
                            colorText={theme.colors.primary100}
                            {...register('neighborhood')}
                            error={errors.neighborhood?.message}
                        />
                        <InputText
                            label="Número"
                            placeholder="Digite o número"
                            type="text"
                            colorText={theme.colors.primary100}
                            {...register('number')}
                            error={errors.number?.message}
                        />
                    </RowInput>
                    <InputText
                        label="Observações"
                        placeholder="Digite as observações"
                        type="text"
                        colorText={theme.colors.primary100}
                        {...register('complement')}
                        error={errors.complement?.message}
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

export default ModalAddAddress;
