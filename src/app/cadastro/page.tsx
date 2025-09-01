'use client';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import RegisterComponent from '@/components/RegisterComponent/RegisterComponent';
import { RegisterContainer } from './styles';
import ModalSuccess from '@/components/ModalSuccess/ModalSuccess';
import { useState } from 'react';

export default function RegisterPage() {
    const [modalState, setModalState] = useState<string | undefined>(undefined);
    return (
        <div>
            {modalState === 'successRegister' && (
                <ModalSuccess
                    onConfirm={() => setModalState(undefined)}
                    title="Sucesso!"
                    confirmText="Fechar"
                    textNormal="Cadastro realizado com sucesso!"
                />
            )}
            <HeaderAuth />
            <RegisterContainer>
                <RegisterComponent
                    onSuccess={() => {
                        setModalState('successRegister');
                    }}
                />
            </RegisterContainer>
        </div>
    );
}
