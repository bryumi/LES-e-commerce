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

const AddressComponent = ({
    onRemoveWarning,
    onEditWarning,
    warning,
}: {
    onRemoveWarning: () => void;
    onEditWarning: () => void;
    warning: any;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <ContainerWarning>
            <MainRow>
                <FieldWrapper>
                    <FieldLabel>Apelido:</FieldLabel>
                    <FieldValue>{warning?.nickname || '-'}</FieldValue>
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
                        onClick={onEditWarning}
                    />
                    <StyledButton
                        text="Excluir"
                        icon={LuTrash2}
                        iconProps={{ size: 16, color: '#FFFFF' }}
                        leftIcon
                        padding="8px 10px"
                        onClick={onRemoveWarning}
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
                        <FieldValue>{warning?.zipCode || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Estado:</FieldLabel>
                        <FieldValue>{warning?.state || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Cidade:</FieldLabel>
                        <FieldValue>{warning?.city || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Tipo de Logradouro:</FieldLabel>
                        <FieldValue>{warning?.typeOfStreet || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Logradouro:</FieldLabel>
                        <FieldValue>{warning?.address || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Tipo de residência:</FieldLabel>
                        <FieldValue>{warning?.typeOfHouse || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Bairro:</FieldLabel>
                        <FieldValue>{warning?.neighborhood || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Número:</FieldLabel>
                        <FieldValue>{warning?.number || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Observações:</FieldLabel>
                        <FieldValue>{warning?.observations || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
            </ContainerWrapper>
        </ContainerWarning>
    );
};

export default AddressComponent;
