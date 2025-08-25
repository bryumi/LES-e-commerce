'use client';
import AddressComponent from '@/components/AddressComponent/AddressComponent';
import { Container, ContentWarnings, ContentWrapper } from './styles';
import StyledButton from '@/components/StyledButton/StyledButton';
import { FiPlusCircle } from 'react-icons/fi';
import { useState } from 'react';
import ModalNotification from '@/components/ModalNotification/ModalNotification';
import ModalAddAddress from '@/components/ModalAddAddress/ModalAddAddress';

const MyAddressesPage = () => {
    const [modalState, setModalState] = useState<string | undefined>(undefined);
    return (
        <>
            {modalState === 'delete' && (
                <ModalNotification
                    title="Atenção!"
                    text="Tem certeza que deseja excluir este endereço?"
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
                <ModalAddAddress
                    onConfirm={() => setModalState(undefined)}
                    onClose={() => setModalState(undefined)}
                    type="add"
                />
            )}
            <Container>
                <h4>Meus Endereços</h4>
                <ContentWarnings>
                    <ContentWrapper>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <h5>Endereços de Entrega</h5>
                            <StyledButton
                                text="Adicionar"
                                icon={FiPlusCircle}
                                iconProps={{ size: 16, color: '#FFFFF' }}
                                leftIcon
                                padding="8px 10px"
                                onClick={() => setModalState('add')}
                            />
                        </div>
                        <AddressComponent
                            onRemoveWarning={() => setModalState('delete')}
                            onEditWarning={() => setModalState('add')}
                            warning={{}}
                        />
                    </ContentWrapper>
                    <ContentWrapper>
                        <div
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <h5>Endereço de cobrança</h5>
                            <StyledButton
                                text="Adicionar"
                                icon={FiPlusCircle}
                                iconProps={{ size: 16, color: '#FFFFF' }}
                                leftIcon
                                padding="8px 10px"
                                onClick={() => setModalState('add')}
                            />
                        </div>
                        <AddressComponent
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
export default MyAddressesPage;
