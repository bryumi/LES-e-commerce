import React, { forwardRef, InputHTMLAttributes, JSX, useState } from 'react';
import {
    InputContainer,
    ErrorText,
    Label,
    IconContainer,
    InputStyle,
    ContainerInput,
    IconWrapper,
    IconLock,
} from './styles';
import MaskedInput from './MaskedInput';
import { HiOutlineEye, HiOutlineLockClosed } from 'react-icons/hi2';
import { HiOutlineEyeOff } from 'react-icons/hi';
import { theme } from '@/styles/theme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    type?: string;
    error?: any;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    name?: string;
    readOnly?: boolean;
    autoComplete?: string;
    maskFunction?: (value: string) => string;
    downloadFile?: boolean;
    onDownload?: () => void;
    marginLabel?: string;
    colorText?: string;
    icon?: React.ComponentType<{ size?: number; color?: string }>;
    iconProps?: { size?: number; color?: string };
    imgIcon?: string;
    isLocked?: boolean;
    labelWeight?: string;
    bottomError?: string;
    fontSize?: string;
    fontColor?: string;
    labelSize?: string;
}

const InputText = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = 'text',
            label,
            placeholder,
            readOnly,
            error,
            onChange,
            value,
            name,
            autoComplete,
            maskFunction,
            downloadFile,
            onDownload,
            marginLabel,
            colorText,
            icon,
            iconProps,
            imgIcon,
            isLocked,
            labelWeight,
            bottomError,
            fontSize,
            fontColor,
            labelSize,
            ...rest
        },
        ref,
    ) => {
        const [showPassword, setShowPassword] = useState(false);

        const toggleShowPassword = (event: React.MouseEvent) => {
            event?.preventDefault();
            setShowPassword(!showPassword);
        };

        const isPassword = type === 'password';

        return (
            <ContainerInput>
                <Label
                    $colorText={colorText}
                    marginLabel={marginLabel}
                    $labelWeight={labelWeight}
                    $labelSize={labelSize}
                >
                    {label}
                </Label>
                <InputContainer className="inputText">
                    <div style={{ position: 'relative', width: '100%' }}>
                        <InputStyle
                            ref={ref as React.Ref<HTMLInputElement>}
                            type={
                                type === 'password' && showPassword
                                    ? 'text'
                                    : type
                            }
                            placeholder={placeholder}
                            onChange={onChange}
                            readOnly={readOnly}
                            disabled={readOnly}
                            value={value}
                            name={name}
                            className={`${
                                isPassword ? 'password-input' : 'normal-input'
                            } `}
                            $error={!!error}
                            autoComplete={autoComplete}
                            {...(maskFunction && {
                                as: MaskedInput,
                                maskFunction,
                            })}
                            {...rest}
                            $icon={!!icon}
                            $fontSize={fontSize}
                        />
                        {icon && (
                            <IconWrapper>
                                {React.createElement(icon, iconProps)}
                            </IconWrapper>
                        )}
                        {imgIcon && (
                            <IconWrapper style={{ top: '15%', left: '0' }}>
                                <img src={imgIcon} alt="Icon" />
                            </IconWrapper>
                        )}
                        {isPassword && (
                            <IconContainer
                                onClick={toggleShowPassword}
                                show={showPassword}
                            >
                                <div className="eyeOff">
                                    <HiOutlineEyeOff
                                        size={19}
                                        color={theme.colors.primary100}
                                    />
                                </div>
                                <div className="eyeOn">
                                    <HiOutlineEye
                                        size={19}
                                        color={theme.colors.primary100}
                                    />
                                </div>
                            </IconContainer>
                        )}
                        {isLocked && (
                            <IconLock>
                                <HiOutlineLockClosed
                                    size={16}
                                    color="#883B8D"
                                />
                            </IconLock>
                        )}
                    </div>
                    {error && (
                        <ErrorText $bottomError={bottomError}>
                            {error}
                        </ErrorText>
                    )}
                </InputContainer>
            </ContainerInput>
        );
    },
);

InputText.displayName = 'InputText';
export default InputText;
