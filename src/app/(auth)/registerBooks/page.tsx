'use client';
import HeaderAuth from '@/components/HeaderAuth/HeaderAuth';
import RegisterBooks from '@/components/RegisterBooks/RegisterBooks';
import { ImageButton, RegisterContainer } from './styles';
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
                    textNormal="Livro cadastrado com sucesso!"
                />
            )}
            <HeaderAuth />
            <RegisterContainer>
                <RegisterBooks />
                <ImageButton onClick={() => setModalState('successRegister')}>
                    Cadastrar Livro
                </ImageButton>
            </RegisterContainer>
        </div>
    );
}
