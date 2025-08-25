import { theme as appTheme } from '@/styles/theme';
import { Button, IconWrapper } from './styles';
import React from 'react';

type ThemeColorKey = keyof typeof appTheme.colors;

interface LoginButtonProps {
    text?: string;
    bgColor?: ThemeColorKey;
    padding?: string;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    type?: 'submit' | 'button' | 'reset';
    borderRadius?: string;
    textColor?: ThemeColorKey;
    disabled?: boolean;
    border?: string;
    fontWeight?: string;
    fontSize?: string;
    boxShadow?: string;
    width?: string;
    height?: string;
    icon?: React.ComponentType<{ size?: number; color?: string }>;
    iconProps?: { size?: number; color?: string };
    leftIcon?: boolean;
}

const StyledButton = ({
    text,
    padding,
    bgColor,
    onClick,
    type,
    borderRadius,
    textColor,
    disabled,
    border,
    fontWeight,
    fontSize,
    boxShadow,
    width,
    height,
    icon: Icon,
    iconProps,
    leftIcon = false,
    ...rest
}: LoginButtonProps) => {
    return (
        <Button
            padding={padding}
            bgColor={bgColor}
            onClick={onClick}
            textColor={textColor}
            type={type}
            $borderRadius={borderRadius}
            disabled={disabled}
            border={border}
            fontWeight={fontWeight}
            fontSize={fontSize}
            $boxShadow={boxShadow}
            width={width}
            height={height}
        >
            {Icon && leftIcon && (
                <IconWrapper>
                    {React.createElement(Icon, iconProps)}
                </IconWrapper>
            )}
            {text}
            {Icon && !leftIcon && (
                <IconWrapper>
                    {React.createElement(Icon, iconProps)}
                </IconWrapper>
            )}
        </Button>
    );
};

export default StyledButton;
