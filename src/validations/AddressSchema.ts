import * as yup from 'yup';

export type IAddressSchema = yup.InferType<typeof AddressSchema>;
export const AddressSchema = yup.object({
    nickname: yup.string().required('Apelido é obrigatório'),
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
});
