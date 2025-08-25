import React, { Component } from 'react';
import Modal from '../Modal/Modal';
import StyledButton from '../StyledButton/StyledButton';
import {
    ButtonsContainer,
    ModalContent,
    TextContent,
    TitleContent,
} from './styles';
import { theme as appTheme } from '@/styles/theme';

type ThemeColorKey = keyof typeof appTheme.colors;
interface ModalSuccessProps {
    title?: string;
    confirmText?: string;
    onConfirm: () => void;
    color?: ThemeColorKey;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    textNormal?: string;
    minHeight?: string;
}
const ModalSuccess = ({
    title,
    confirmText,
    onConfirm,
    color,
    icon: Icon,
    textNormal,
    minHeight = '12rem',
}: ModalSuccessProps) => {
    return (
        <Modal>
            <ModalContent $minHeight={minHeight}>
                <TitleContent>
                    <div>{Icon && <Icon />}</div>
                    <h2>{title}</h2>
                </TitleContent>
                <TextContent>
                    <p>{textNormal}</p>
                </TextContent>
                <ButtonsContainer>
                    <StyledButton
                        onClick={onConfirm}
                        bgColor={'bgModal'}
                        textColor={color ? color : 'primary100'}
                        text={confirmText}
                        width="100%"
                        border={`1px solid ${
                            appTheme.colors[color || 'primary100']
                        }`}
                        boxShadow="none"
                        fontSize="1rem"
                        height="auto"
                    />
                </ButtonsContainer>
            </ModalContent>
        </Modal>
    );
};

export default ModalSuccess;
