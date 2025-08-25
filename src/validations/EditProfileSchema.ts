import { isValid, parse } from 'date-fns';
import * as yup from 'yup';
import { cpf } from 'cpf-cnpj-validator';

export type IEditProfileSchema = yup.InferType<typeof EditProfileSchema>;
const parseDate = (value: string) => {
    if (!value || value === 'null') return null;
    const parsed = parse(value, 'yyyy-MM-dd', new Date());
    return isValid(parsed) ? parsed : null;
};
const isValidCPF = (value: string | undefined | null) => {
    if (!value) return false;
    return cpf.isValid(value);
};
export const EditProfileSchema = yup.object({
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
});
