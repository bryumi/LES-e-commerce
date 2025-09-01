import StyledButton from '@/components/StyledButton/StyledButton';
import {
    ArrowButton,
    ContainerWarning,
    ContainerWrapper,
    ContentText,
    FieldLabel,
    FieldValue,
    FieldWrapper,
    MainRow,
    Row,
} from './styles';
import { LuPencil, LuTrash2 } from 'react-icons/lu';
import { IoIosArrowDown } from 'react-icons/io';
import { theme } from '@/styles/theme';
import { useState } from 'react';
import CheckBox from '../CheckBox/CheckBox';

const AddressComponent = ({
    onRemoveItem,
    onEditItem,
    Item,
    isCheckout,
    checked,
    onSelected,
}: {
    onRemoveItem?: () => void;
    onEditItem?: () => void;
    Item?: any;
    isCheckout?: boolean;
    checked?: boolean;
    onSelected?: () => void;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <ContainerWarning>
            {isCheckout && <CheckBox onChange={onSelected} checked={checked} />}
            <MainRow>
                <FieldWrapper>
                    <FieldLabel>Apelido:</FieldLabel>
                    <FieldValue>{Item?.nickname || '-'}</FieldValue>
                </FieldWrapper>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.5rem',
                    }}
                >
                    <StyledButton
                        text="Editar"
                        icon={LuPencil}
                        iconProps={{ size: 16, color: theme.colors.primary100 }}
                        leftIcon
                        padding="8px 10px"
                        border={`1px solid ${theme.colors.primary100}`}
                        bgColor="white"
                        textColor={'primary100'}
                        onClick={onEditItem}
                    />
                    <StyledButton
                        text="Excluir"
                        icon={LuTrash2}
                        iconProps={{ size: 16, color: '#FFFFF' }}
                        leftIcon
                        padding="8px 10px"
                        onClick={onRemoveItem}
                    />
                    <ArrowButton $isOpen={open} onClick={() => setOpen(!open)}>
                        <IoIosArrowDown color={theme.colors.primary100} />
                    </ArrowButton>
                </div>
            </MainRow>
            <ContainerWrapper isOpen={open}>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Cep:</FieldLabel>
                        <FieldValue>{Item?.zipCode || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Estado:</FieldLabel>
                        <FieldValue>{Item?.state || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Cidade:</FieldLabel>
                        <FieldValue>{Item?.city || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Tipo de Logradouro:</FieldLabel>
                        <FieldValue>{Item?.typeOfStreet || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Logradouro:</FieldLabel>
                        <FieldValue>{Item?.address || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Tipo de residência:</FieldLabel>
                        <FieldValue>{Item?.typeOfHouse || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Bairro:</FieldLabel>
                        <FieldValue>{Item?.neighborhood || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Número:</FieldLabel>
                        <FieldValue>{Item?.number || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Observações:</FieldLabel>
                        <FieldValue>{Item?.observations || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
            </ContainerWrapper>
        </ContainerWarning>
    );
};

export default AddressComponent;
