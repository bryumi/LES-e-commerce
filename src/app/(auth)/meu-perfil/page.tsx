'use client';
import InputText from '@/components/InputText/InputText';
import {
    FormContainer,
    InputDataContainer,
    RowContainer,
    SwicthContent,
} from './styles';
import { Controller, useForm } from 'react-hook-form';
import StyledButton from '@/components/StyledButton/StyledButton';
import {
    EditProfileSchema,
    IEditProfileSchema,
} from '@/validations/EditProfileSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { maskCPF, maskPhone } from '@/utils/masks';
import { useState } from 'react';
import InputSelect from '@/components/InputSelect/InputSelect';
import { genderOptions } from '@/data/options';
import { localStorageKeys } from '@/utils/localStorageKeys';
import ModalChangePassword from '@/components/ModalChangePassword/ModalChangePassword';
import ModalSuccess from '@/components/ModalSuccess/ModalSuccess';
import { se } from 'date-fns/locale';
import { Switch } from '@mui/material';

const ProfilePage = () => {
    const [typeForm, setTypeForm] = useState<'edit' | 'view'>('view');
    const [modalState, setModalState] = useState<string | undefined>(undefined);
    const [isInactive, setIsInactive] = useState(true);
    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsInactive(event.target.checked);
    };
    const savedData = JSON.parse(
        localStorage.getItem(localStorageKeys.userData) || '{}',
    );
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        control,
    } = useForm({
        resolver: yupResolver(EditProfileSchema),
        mode: 'onBlur',
        defaultValues: {
            name: savedData.name || '',
            email: savedData.email || '',
            cpf: savedData.cpf || '',
            birthDate: savedData.birthDate || '',
            gender: savedData.gender || '',
            phone: savedData.phone || '',
        },
    });

    const onSubmit = async (data: IEditProfileSchema) => {
        localStorage.setItem(localStorageKeys.userData, JSON.stringify(data));
        setTypeForm('view');
        setModalState('successEdit');
    };
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSubmit(onSubmit)();
        }
    };
    return (
        <>
            {modalState === 'change-password' && (
                <ModalChangePassword
                    onClose={() => setModalState(undefined)}
                    onConfirm={() => {
                        setModalState('successPassword');
                    }}
                />
            )}
            {modalState === 'successEdit' && (
                <ModalSuccess
                    onConfirm={() => setModalState(undefined)}
                    title="Sucesso!"
                    confirmText="Fechar"
                    textNormal="Alteração realizada com sucesso!"
                />
            )}
            {modalState === 'successPassword' && (
                <ModalSuccess
                    onConfirm={() => setModalState(undefined)}
                    title="Sucesso!"
                    confirmText="Fechar"
                    textNormal="Senha alterada com sucesso!"
                />
            )}
            <FormContainer
                onSubmit={handleSubmit(onSubmit)}
                onKeyDown={handleKeyDown}
            >
                <InputDataContainer>
                    <h4>Dados Pessoais</h4>
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            gap: '1rem',
                            justifyContent: 'end',
                        }}
                    >
                        <SwicthContent>
                            <label>
                                {!isInactive
                                    ? 'Ativar conta ?'
                                    : 'Inativar conta ?'}
                            </label>
                            <Switch
                                checked={isInactive}
                                onChange={handleSwitchChange}
                            />
                        </SwicthContent>
                        {typeForm === 'view' ? (
                            <StyledButton
                                text="Editar"
                                disabled={isSubmitting}
                                padding="0.5rem 2.25rem"
                                onClick={event => {
                                    event?.preventDefault();
                                    setTypeForm('edit');
                                }}
                            />
                        ) : (
                            <StyledButton
                                text="Salvar"
                                disabled={isSubmitting}
                                padding="0.5rem 2.25rem"
                                type="submit"
                            />
                        )}
                        <StyledButton
                            text="Alterar senha"
                            disabled={isSubmitting}
                            padding="0.5rem 2.25rem"
                            onClick={event => {
                                event?.preventDefault();
                                setModalState('change-password');
                            }}
                        />
                    </div>
                    <RowContainer>
                        <InputText
                            label="Nome"
                            placeholder="Digite seu nome"
                            type="text"
                            readOnly={typeForm === 'view'}
                            {...register('name')}
                            error={errors.name?.message}
                        />
                        <InputText
                            label="E-mail"
                            placeholder="Digite o e-mail"
                            type="text"
                            readOnly={typeForm === 'view'}
                            {...register('email')}
                            error={errors.email?.message}
                        />
                    </RowContainer>
                    <RowContainer>
                        <InputText
                            label="CPF"
                            placeholder="000.000.000-00"
                            type="text"
                            maskFunction={maskCPF}
                            readOnly={typeForm === 'view'}
                            {...register('cpf')}
                            error={errors.cpf?.message}
                        />
                        <InputText
                            label="Data de Nascimento"
                            placeholder="Digite sua data de nascimento"
                            type="date"
                            readOnly={typeForm === 'view'}
                            {...register('birthDate')}
                            error={errors.birthDate?.message}
                        />
                        <Controller
                            control={control}
                            name="gender"
                            render={({ field }) => (
                                <InputSelect
                                    {...field}
                                    isDisabled={typeForm === 'view'}
                                    value={
                                        genderOptions.find(
                                            option =>
                                                option.value === field.value,
                                        ) || null
                                    }
                                    onChange={option =>
                                        field.onChange(option?.value)
                                    }
                                    label="Gênero"
                                    options={genderOptions}
                                />
                            )}
                        />
                    </RowContainer>
                    <RowContainer>
                        <InputText
                            label="Tipo de Telefone"
                            placeholder="Residencial, Comercial, Celular, etc.."
                            type="text"
                            readOnly={typeForm === 'view'}
                            {...register('typeOfPhone')}
                            error={errors.typeOfPhone?.message}
                        />
                        <InputText
                            label="Telefone"
                            placeholder="(00) 00000-0000"
                            type="text"
                            maskFunction={maskPhone}
                            {...register('phone')}
                            error={errors.phone?.message}
                        />
                    </RowContainer>
                </InputDataContainer>
            </FormContainer>
        </>
    );
};

export default ProfilePage;
