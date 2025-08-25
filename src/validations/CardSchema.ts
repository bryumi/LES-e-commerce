import * as yup from 'yup';

export type ICardSchema = yup.InferType<typeof CardSchema>;

export const CardSchema = yup.object({
    cardName: yup.string().required('Nome é obrigatório'),
    cardNumber: yup.string().required('Número do cartão é obrigatório'),
    cardExpiration: yup.string().required('Data de validade é obrigatória'),
    cardCVV: yup.string().required('Código de segurança é obrigatório'),
});
