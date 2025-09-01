'use client';
import { Container, ContentWarnings, ContentWrapper } from './styles';
import StyledButton from '@/components/StyledButton/StyledButton';
import { FiPlusCircle } from 'react-icons/fi';
import { useState } from 'react';
import ModalNotification from '@/components/ModalNotification/ModalNotification';
import CardsComponent from '@/components/CardComponent/CardComponent';
import ModalAddCard from '@/components/ModalAddCard/ModalAddCard';

const MyCardsPage = () => {
    const [modalState, setModalState] = useState<string | undefined>(undefined);
    return (
        <>
            {modalState === 'delete' && (
                <ModalNotification
                    title="Atenção!"
                    text="Tem certeza que deseja excluir este cartão?"
                    onClose={() => setModalState(undefined)}
                    onConfirm={() => {
                        setModalState(undefined);
                    }}
                    closeText="Cancelar"
                    confirmText="Sair"
                    color="error100"
                    border="1px solid #FF0000"
                />
            )}
            {modalState === 'add' && (
                <ModalAddCard
                    onConfirm={() => setModalState(undefined)}
                    onClose={() => setModalState(undefined)}
                    type="add"
                />
            )}
            <Container>
                <h4>Meus cartões</h4>
                <ContentWarnings>
                    <ContentWrapper>
                        <StyledButton
                            text="Adicionar"
                            icon={FiPlusCircle}
                            iconProps={{ size: 16, color: '#FFFFF' }}
                            leftIcon
                            padding="8px 10px"
                            onClick={() => setModalState('add')}
                        />
                        <CardsComponent
                            onRemoveWarning={() => setModalState('delete')}
                            onEditWarning={() => setModalState('add')}
                            warning={{}}
                        />
                    </ContentWrapper>
                </ContentWarnings>
            </Container>
        </>
    );
};
export default MyCardsPage;
