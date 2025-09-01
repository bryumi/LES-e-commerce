import StyledButton from '@/components/StyledButton/StyledButton';
import {
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

const CardsComponent = ({
    onRemoveWarning,
    onEditWarning,
    warning,
    onSelected,
    checked,
    isCheckout = false,
}: {
    onRemoveWarning?: () => void;
    onEditWarning?: () => void;
    warning?: any;
    onSelected?: () => void;
    checked?: boolean;
    isCheckout?: boolean;
}) => {
    const [open, setOpen] = useState(false);
    return (
        <ContainerWarning>
            {isCheckout && <CheckBox onChange={onSelected} checked={checked} />}
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
            </div>
            <ContainerWrapper>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Nome:</FieldLabel>
                        <FieldValue>{warning?.city || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Número do cartão:</FieldLabel>
                        <FieldValue>{warning?.zipCode || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Código de Segurança:</FieldLabel>
                        <FieldValue>{warning?.state || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
                <Row>
                    <FieldWrapper>
                        <FieldLabel>Bandeira:</FieldLabel>
                        <FieldValue>{warning?.typeOfStreet || '-'}</FieldValue>
                    </FieldWrapper>
                    <FieldWrapper>
                        <FieldLabel>Validade:</FieldLabel>
                        <FieldValue>{warning?.address || '-'}</FieldValue>
                    </FieldWrapper>
                </Row>
            </ContainerWrapper>
        </ContainerWarning>
    );
};

export default CardsComponent;
