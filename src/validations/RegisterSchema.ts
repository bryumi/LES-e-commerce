import { isValid, parse } from 'date-fns';
import * as yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

export type IRegisterForm = yup.InferType<typeof RegisterSchema>;
const parseDate = (value: string) => {
    if (!value || value === 'null') return null;
    const parsed = parse(value, 'yyyy-MM-dd', new Date());
    return isValid(parsed) ? parsed : null;
};
const isValidCPF = (value: string | undefined | null) => {
    if (!value) return false;
    return cpf.isValid(value);
};
export const RegisterSchema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup
        .string()
        .email('Insira um e-mail válido')
        .required('E-mail é obrigatório'),
    cpf: yup
        .string()
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido')
        .test('is-valid-cpf', 'CPF inválido', isValidCPF)
        .required('CPF é obrigatório'),
    gender: yup.string().required('Gênero é obrigatório'),
    typeOfPhone: yup.string().required('Tipo de telefone é obrigatório'),
    phone: yup
        .string()
        .required('Telefone é obrigatório')
        .matches(
            /^\(\d{2}\)\s?(?:9\d{4}|\d{4})\s?[-–—]\s?\d{4}$/,
            'Formato inválido. Use (00) 00000-0000 ou (00) 0000-0000',
        ),
    password: yup
        .string()
        .required('Nova senha é obrigatória')
        .min(8, 'A senha deve ter no mínimo 8 caracteres')
        .matches(/[A-Z]/, 'A senha deve conter ao menos uma letra maiúscula')
        .matches(/[a-z]/, 'A senha deve conter ao menos uma letra minúscula')
        .matches(
            /[^A-Za-z0-9]/,
            'A senha deve conter ao menos um caractere especial',
        ),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem coincidir')
        .required('Confirmação de senha é obrigatória'),
    birthDate: yup
        .string()
        .test('is-valid-date', 'Data de nascimento inválida', value => {
            if (!value || value === 'null') return false;

            const date = parseDate(value);
            if (!date) return false;

            const minDate = new Date(1905, 0, 1); // 01/01/1905
            const today = new Date();
            today.setHours(0, 0, 0, 0); // zera hora pra comparação exata com datas

            return date >= minDate && date < today;
        })
        .required('Data de nascimento é obrigatória'),
    addressNickname: yup.string().required('Apelido do endereço é obrigatório'),
    typeStreet: yup.string().required('Tipo de logradouro é obrigatório'),
    address: yup.string().required('Endereço é obrigatório'),
    city: yup.string().required('Cidade é obrigatória'),
    typeOfHouse: yup.string().required('Tipo de residência é obrigatório'),
    state: yup.string().required('Estado é obrigatório'),
    zipCode: yup
        .string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('CEP é obrigatório'),
    neighborhood: yup.string().required('Bairro é obrigatório'),
    number: yup.string().required('Número é obrigatório'),
    complement: yup.string().optional(),

    typeStreetCharge: yup.string().required('Tipo de logradouro é obrigatório'),
    addressCharge: yup.string().required('Endereço é obrigatório'),
    cityCharge: yup.string().required('Cidade é obrigatória'),
    typeOfHouseCharge: yup
        .string()
        .required('Tipo de residência é obrigatório'),
    stateCharge: yup.string().required('Estado é obrigatório'),
    zipCodeCharge: yup
        .string()
        .matches(/^\d{5}-\d{3}$/, 'CEP inválido')
        .required('CEP é obrigatório'),
    neighborhoodCharge: yup.string().required('Bairro é obrigatório'),
    numberCharge: yup.string().required('Número é obrigatório'),
    complementCharge: yup.string().optional(),
    cardName: yup.string().required('Nome é obrigatório'),
    cardNumber: yup.string().required('Número do cartão é obrigatório'),
    cardExpiration: yup.string().required('Data de validade é obrigatória'),
    cardCVC: yup.string().required('Código de segurança é obrigatório'),
});
