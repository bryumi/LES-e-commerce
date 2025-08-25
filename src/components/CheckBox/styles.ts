import styled from 'styled-components';

export const CheckboxContainer = styled.label`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    cursor: pointer;
`;
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    opacity: 0;
    position: absolute;
    z-index: 1;
    transition: all 150ms;
    width: 13px;
    height: 13px;
    cursor: pointer;
`;
interface StyledCheckboxProps {
    $bgColor?: string;
    $borderColor?: string;
    $borderRadius?: string;
    $content?: boolean;
}
export const StyledCheckbox = styled.div<StyledCheckboxProps>`
    display: inline-block;
    width: 22px;
    height: 22px;
    background: transparent;
    border: 1.5px solid
        ${({ theme, $borderColor }) => $borderColor || theme.colors.neutral500};
    border-radius: ${({ $borderRadius }) => $borderRadius || '3px'};
    transition: all 150ms;
    position: relative;
    transition: all 150ms;
    pointer-events: none;

    ${HiddenCheckbox}:checked + & {
        background: ${({ theme, $bgColor }) =>
            $bgColor ? $bgColor : theme.colors.success};
        border-color: ${({ theme }) => theme.colors.neutral500};

        &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            ${({ $content }) =>
                $content
                    ? `
      width: 8px;
      height: 8px;
      background-color: white;
      border-radius: 50%;
    `
                    : `
      width: 14px;
      height: 14px;
      background-image: url('/svg/check.svg');
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    `}
        }
    }
`;
