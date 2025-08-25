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
interface ModalNotificationProps {
    image?: string;
    title?: string;
    description?: string;
    closeText?: string;
    confirmText?: string;
    onClose: () => void;
    onConfirm: () => void;
    color?: ThemeColorKey;
    border?: string;
    width?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    disabledButton?: boolean;
    oneButton?: boolean;
    text?: string;
    secondaryText?: string;
}
const ModalNotification = ({
    title,
    closeText,
    confirmText,
    onClose,
    onConfirm,
    color,
    border,
    width,
    icon: Icon,
    disabledButton,
    oneButton = false, // Default to false if not provided
    text,
    secondaryText,
}: ModalNotificationProps) => {
    return (
        <Modal>
            <ModalContent $width={width}>
                <TitleContent>
                    <div>{Icon && <Icon />}</div>
                    <h2>{title}</h2>
                </TitleContent>
                <TextContent>
                    {text}
                    <br /> {secondaryText}
                </TextContent>
                <ButtonsContainer $oneButton={oneButton}>
                    {!oneButton && (
                        <div>
                            <StyledButton
                                onClick={onClose}
                                border={border}
                                text={closeText}
                                textColor={color}
                                bgColor={'white'}
                                boxShadow="none"
                                fontSize="1rem"
                                height="36px"
                                width="100%"
                                disabled={disabledButton}
                            />
                        </div>
                    )}
                    <div>
                        <StyledButton
                            onClick={onConfirm}
                            bgColor={color}
                            text={confirmText}
                            boxShadow="none"
                            fontSize="1rem"
                            height="36px"
                            width="100%"
                            disabled={disabledButton}
                        />
                    </div>
                </ButtonsContainer>
            </ModalContent>
        </Modal>
    );
};

export default ModalNotification;
