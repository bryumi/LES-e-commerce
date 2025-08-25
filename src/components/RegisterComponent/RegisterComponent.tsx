import handleError from '@/utils/handleToast';
import { IRegisterForm, RegisterSchema } from '@/validations/RegisterSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
    FormContainer,
    InputDataContainer,
    RowContainer,
    SwicthContent,
    TitleContent,
} from './styles';
import InputText from '../InputText/InputText';
import {
    maskCardExpiry,
    maskCardNumber,
    maskCEP,
    maskCPF,
    maskNumberCvc,
    maskPhone,
} from '@/utils/masks';
import StyledButton from '../StyledButton/StyledButton';
import SwitchComponent from '../Switch/Switch';
import { se } from 'date-fns/locale';
import InputSelect from '../InputSelect/InputSelect';
import { genderOptions } from '@/data/options';
import { set } from 'date-fns';
import { localStorageKeys } from '@/utils/localStorageKeys';
import { Input } from '@mui/material';

interface RegisterComponentProps {
    onSuccess: () => void;
    registerData?: IRegisterForm;
}
const RegisterComponent = ({
    onSuccess,
    registerData,
}: RegisterComponentProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [sameAddress, setSameAddress] = useState(false);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        setValue,
        getValues,
        trigger,
        control,
        formState: { errors },
    } = useForm<IRegisterForm>({
        resolver: yupResolver(RegisterSchema),
        mode: 'onChange',
        defaultValues: registerData,
    });
    const handleSwitchChange = () => {
        if (!sameAddress) {
            setValue('addressCharge', getValues('address'));
            setValue('neighborhoodCharge', getValues('neighborhood'));
            setValue('cityCharge', getValues('city'));
            setValue('typeStreetCharge', getValues('typeStreet'));
            setValue('typeOfHouseCharge', getValues('typeOfHouse'));
            setValue('stateCharge', getValues('state'));
            setValue('zipCodeCharge', getValues('zipCode'));
            setValue('numberCharge', getValues('number'));
            setValue('complementCharge', getValues('complement'));
            setSameAddress(true);
        } else {
            setValue('addressCharge', '');
            setValue('neighborhoodCharge', '');
            setValue('cityCharge', '');
            setValue('stateCharge', '');
            setValue('zipCodeCharge', '');
            setValue('numberCharge', '');
            setValue('complementCharge', '');
            setValue('typeStreetCharge', '');
            setValue('typeOfHouseCharge', '');
            setSameAddress(false);
        }
    };
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
    const handleCepChargeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        let numericValue = getValues('zipCodeCharge');
        numericValue = numericValue.replace('-', '');
        if (numericValue.length === 8) {
            getCepData(numericValue);
        } else {
            setValue('addressCharge', '');
            setValue('neighborhoodCharge', '');
            setValue('cityCharge', '');
            setValue('stateCharge', '');
            trigger([
                'addressCharge',
                'neighborhoodCharge',
                'cityCharge',
                'stateCharge',
            ]);
        }
    };
    const onSubmit: SubmitHandler<IRegisterForm> = async data => {
        try {
            setIsSubmitting(true);
            console.log(data);
            localStorage.setItem(
                localStorageKeys.userData,
                JSON.stringify(data),
            );
            onSuccess();
        } catch (error) {
            handleError(error);
        } finally {
            setIsSubmitting(false);
        }
    };
    const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit(onSubmit)();
        }
    };
    return (
        <FormContainer
            onSubmit={handleSubmit(onSubmit)}
            onKeyDown={handleKeyDown}
        >
            <InputDataContainer>
                <h4>Dados Pessoais</h4>
                <RowContainer>
                    <InputText
                        label="Nome"
                        placeholder="Digite seu nome"
                        type="text"
                        {...register('name')}
                        error={errors.name?.message}
                    />
                    <InputText
                        label="E-mail"
                        placeholder="Digite o e-mail"
                        type="text"
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
                        {...register('cpf')}
                        error={errors.cpf?.message}
                    />
                    <InputText
                        label="Data de Nascimento"
                        placeholder="Digite sua data de nascimento"
                        type="date"
                        {...register('birthDate')}
                        error={errors.birthDate?.message}
                    />
                    <Controller
                        control={control}
                        name="gender"
                        render={({ field }) => (
                            <InputSelect
                                {...field}
                                value={
                                    genderOptions.find(
                                        option => option.value === field.value,
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
                        {...register('typeOfPhone')}
                        error={errors.typeOfPhone?.message}
                    />
                    <InputText
                        label="Celular"
                        placeholder="(00) 00000-0000"
                        type="text"
                        maskFunction={maskPhone}
                        {...register('phone')}
                        error={errors.phone?.message}
                    />
                </RowContainer>
                <RowContainer>
                    <InputText
                        label="Senha"
                        placeholder="Digite uma senha"
                        type="password"
                        {...register('password')}
                        error={errors.password?.message}
                    />
                    <InputText
                        label="Confirmar Senha"
                        placeholder="Confirme sua senha"
                        type="password"
                        {...register('confirmPassword')}
                        error={errors.confirmPassword?.message}
                    />
                </RowContainer>
            </InputDataContainer>
            <InputDataContainer>
                <h4>Endereço de entrega</h4>
                <InputText
                    label="Apelido do Endereço"
                    placeholder="Digite um apelido para o endereço"
                    type="text"
                    {...register('addressNickname')}
                    error={errors.addressNickname?.message}
                />
                <RowContainer>
                    <InputText
                        label="CEP"
                        placeholder="00000-000"
                        type="text"
                        {...register('zipCode', {
                            onChange: handleCepInput,
                        })}
                        maskFunction={maskCEP}
                        error={errors.zipCode?.message}
                    />
                    <InputText
                        label="Cidade"
                        placeholder="Digite a cidade"
                        type="text"
                        {...register('city')}
                        error={errors.city?.message}
                    />
                    <InputText
                        label="Estado"
                        placeholder="Digite o estado"
                        type="text"
                        {...register('state')}
                        error={errors.state?.message}
                    />
                </RowContainer>
                <RowContainer>
                    <InputText
                        label="Tipo de Logradouro"
                        placeholder="Avenida, Rua, Travessa, etc.."
                        type="text"
                        {...register('typeStreet')}
                        error={errors.typeStreet?.message}
                    />
                    <InputText
                        label="Logradouro"
                        placeholder="Ex: Rua Estrela"
                        type="text"
                        {...register('address')}
                        error={errors.address?.message}
                    />
                </RowContainer>
                <RowContainer>
                    <InputText
                        label="Tipo de Residência"
                        placeholder="Digite o tipo de residência (Ex: Casa, Apartamento)"
                        type="text"
                        {...register('typeOfHouse')}
                        error={errors.typeOfHouse?.message}
                    />
                    <InputText
                        label="Número"
                        placeholder="Digite o número"
                        type="text"
                        {...register('number')}
                        error={errors.number?.message}
                    />
                </RowContainer>
                <RowContainer>
                    <InputText
                        label="Bairro"
                        placeholder="Digite o bairro"
                        type="text"
                        {...register('neighborhood')}
                        error={errors.neighborhood?.message}
                    />
                    <InputText
                        label="Observações"
                        placeholder="Digite se tiver alguma observação"
                        type="text"
                        {...register('complement')}
                        error={errors.complement?.message}
                    />
                </RowContainer>
            </InputDataContainer>
            <InputDataContainer>
                <TitleContent>
                    <p>Endereço de cobrança</p>
                    <SwicthContent>
                        <label>Endereço igual ao de entrega</label>
                        <SwitchComponent
                            checked={sameAddress}
                            onChange={handleSwitchChange}
                        />
                    </SwicthContent>
                </TitleContent>
                <RowContainer>
                    <InputText
                        label="CEP"
                        placeholder="00000-000"
                        type="text"
                        {...register('zipCodeCharge', {
                            onChange: handleCepChargeInput,
                        })}
                        maskFunction={maskCEP}
                        error={errors.zipCodeCharge?.message}
                    />
                    <InputText
                        label="Cidade"
                        placeholder="Digite a cidade"
                        type="text"
                        {...register('cityCharge')}
                        error={errors.cityCharge?.message}
                    />
                    <InputText
                        label="Estado"
                        placeholder="Digite o estado"
                        type="text"
                        {...register('stateCharge')}
                        error={errors.stateCharge?.message}
                    />
                </RowContainer>
                <RowContainer>
                    <InputText
                        label="Tipo de Logradouro"
                        placeholder="Avenida, Rua, Travessa, etc.."
                        type="text"
                        {...register('typeStreetCharge')}
                        error={errors.typeStreetCharge?.message}
                    />
                    <InputText
                        label="Logradouro"
                        placeholder="Ex: Rua Estrela"
                        type="text"
                        {...register('addressCharge')}
                        error={errors.addressCharge?.message}
                    />
                </RowContainer>
                <RowContainer>
                    <InputText
                        label="Tipo de Residência"
                        placeholder="Digite o tipo de residência (Ex: Casa, Apartamento)"
                        type="text"
                        {...register('typeOfHouseCharge')}
                        error={errors.typeOfHouseCharge?.message}
                    />
                    <InputText
                        label="Número"
                        placeholder="Digite o número"
                        type="text"
                        {...register('numberCharge')}
                        error={errors.numberCharge?.message}
                    />
                </RowContainer>
                <RowContainer>
                    <InputText
                        label="Bairro"
                        placeholder="Digite o bairro"
                        type="text"
                        {...register('neighborhoodCharge')}
                        error={errors.neighborhoodCharge?.message}
                    />
                    <InputText
                        label="Observações"
                        placeholder="Digite se tiver alguma observação"
                        type="text"
                        {...register('complementCharge')}
                        error={errors.complementCharge?.message}
                    />
                </RowContainer>
            </InputDataContainer>
            <InputDataContainer>
                <TitleContent>
                    <p>Dados do cartão</p>
                </TitleContent>
                <RowContainer>
                    <InputText
                        label="Nome impresso no cartão"
                        placeholder="Digite o nome impresso no cartão"
                        type="text"
                        {...register('cardName')}
                        error={errors.cardName?.message}
                    />
                    <InputText
                        label="Número do cartão"
                        placeholder="Digite o número do cartão"
                        type="text"
                        maskFunction={maskCardNumber}
                        {...register('cardNumber')}
                        error={errors.cardNumber?.message}
                    />
                    <InputText
                        label="Data de validade"
                        placeholder="Digite a data de validade"
                        type="text"
                        maskFunction={maskCardExpiry}
                        {...register('cardExpiration')}
                        error={errors.cardExpiration?.message}
                    />
                    <InputText
                        label="Código de segurança"
                        placeholder="Digite o código de segurança"
                        type="text"
                        maskFunction={maskNumberCvc}
                        {...register('cardCVC')}
                        error={errors.cardCVC?.message}
                    />
                </RowContainer>
                <div
                    style={{
                        width: '100%',
                        display: 'flex',
                        gap: '1rem',
                        justifyContent: 'end',
                        marginTop: '3.5rem',
                    }}
                >
                    <StyledButton
                        text="Finalizar"
                        type="submit"
                        disabled={isSubmitting}
                        padding="0.5rem 2.25rem"
                    />
                </div>
            </InputDataContainer>
        </FormContainer>
    );
};

export default RegisterComponent;
