import styled from 'styled-components';
import { keyframes } from 'styled-components';

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    width: 100%;
    max-width: 100%;
    white-space: nowrap;
`;
export const InputContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    z-index: 3;
`;
interface InputStyleProps {
    marginLabel?: string;
    disabled?: boolean;
    isPassword?: boolean;
    borderRed?: boolean;
    $colorText?: string;
    $icon?: boolean;
    $labelWeight?: string;
    $fontSize?: string;
    $fontColor?: string;
    $error?: boolean;
    $labelSize?: string;
}
export const InputStyle = styled.input<InputStyleProps>`
    height: 2.6rem;
    width: 100%;
    padding: ${({ $icon }) =>
        $icon ? '0.75rem 0.75rem 0.75rem 2.5rem' : '0.75rem'};
    padding-right: ${({ isPassword }) => (isPassword ? '3rem' : '0.875rem')};
    font-size: ${({ $fontSize }) => $fontSize || '1rem'};
    font-weight: 400;
    font-family: Poppins;
    border: ${({ $error, theme }) =>
        $error
            ? `1px solid ${theme.colors.error100}`
            : `1px solid ${theme.colors.border}`};
    border-radius: 12px;
    outline: none;
    background-color: transparent;
    transition: 0.3s;
    color: ${({ theme, $colorText }) => $colorText || theme.colors.textInput};
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
    &:-webkit-autofill {
        box-shadow: 0 0 0 1000px white inset !important;
        -webkit-text-fill-color: ${({ theme }) =>
            theme.colors.neutral200} !important;
    }
    &::placeholder {
        color: ${({ theme, $colorText }) =>
            $colorText ? theme.colors.neutral300 : theme.colors.placeholder};
    }
    &:disabled {
        color: ${({ theme }) => theme.colors.textInput};
    }
    &.password-input {
        padding-right: 3rem;
    }

    &.normal-input {
        padding-right: 1.2rem;
    }
    &:focus {
        border: 1px solid ${({ theme }) => theme.colors.primary100};
    }
`;
export const Label = styled.label<InputStyleProps>`
    font-family: Poppins;
    color: ${({ $colorText, theme }) => $colorText || theme.colors.label};
    font-size: ${({ $labelSize }) => $labelSize || '1rem'};
    line-height: 1.5625rem;
    font-weight: ${({ $labelWeight }) => $labelWeight || '500'};
`;
export const ErrorText = styled.span<{ $bottomError?: string }>`
    color: ${({ theme }) => theme.colors.error100};
    font-size: 0.75rem;
    font-weight: 400;
    font-family: var(--font-roboto);
    position: absolute;
    bottom: ${({ $bottomError }) => $bottomError || '-1rem'};
    left: 0.25rem;
    white-space: normal;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
export const IconWrapper = styled.div`
    position: absolute;
    top: 25%;
    left: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
`;
export const IconLock = styled.div`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
`;

export const IconContainer = styled.button.withConfig({
    shouldForwardProp: prop => prop !== 'show',
})<{ show: boolean }>`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;

    div {
        background-color: transparent;
        border: none;
        position: absolute;
    }

    div.eyeOn,
    div.eyeOff {
        position: absolute;
        right: 0.25rem;
        opacity: 0;
        color: ${({ theme }) => theme.colors.neutral200};
        width: 1.5rem;
    }

    div.eyeOn {
        animation: ${({ show }) => (show ? fadeIn : fadeOut)} 0.5s ease forwards;
    }

    div.eyeOff {
        animation: ${({ show }) => (!show ? fadeIn : fadeOut)} 0.5s ease
            forwards;
    }
`;
