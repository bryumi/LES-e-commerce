import React, { useState } from 'react';
import ReactSelect, {
    DropdownIndicatorProps,
    Props as SelectProps,
    components,
} from 'react-select';

import { CSSProperties, useTheme } from 'styled-components';
import {
    Container,
    ContainerMenuList,
    ErrorMessage,
    LabelText,
    SelectWrapper,
} from './styles';
import { IoIosArrowDown } from 'react-icons/io';
import { theme } from '@/styles/theme';

export interface OptionType {
    label: string;
    value: string | number;
    color?: string;
}
interface Props<T extends boolean>
    extends SelectProps<OptionType, T, { options: OptionType[] }> {
    label?: string;
    labelObs?: string;
    error?: string;
    labelStyle?: CSSProperties;
    options?: OptionType[];
    isMulti?: T;
    isDisabled?: boolean;
    labelFilter?: boolean;
    children?: React.ReactNode;
    height?: string;
    padding?: string;
    icon?: React.ComponentType<{ size?: number; color?: string }>;
    iconProps?: { size?: number; color?: string };
    onOpenChange?: (isOpen: boolean) => void;
}

const customFilterOption = (option: any, inputValue: string) => {
    return option.label.toLowerCase().includes(inputValue.toLowerCase());
};

const DropdownIndicatorCustom = (
    props: DropdownIndicatorProps<any, boolean>,
) => {
    const {
        selectProps: { menuIsOpen },
    } = props;

    return (
        <components.DropdownIndicator {...props}>
            {menuIsOpen ? (
                // Seta para cima
                <IoIosArrowDown
                    size={16}
                    color={theme.colors.primary100}
                    style={{ transform: 'rotate(180deg)' }}
                />
            ) : (
                // Seta para baixo
                <IoIosArrowDown size={16} color={theme.colors.primary100} />
            )}
        </components.DropdownIndicator>
    );
};
const CustomMenuList = (props: any) => {
    return (
        <components.MenuList {...props}>
            <ContainerMenuList>{props.children}</ContainerMenuList>
        </components.MenuList>
    );
};
const InputSelect = <T extends boolean = false>({
    label,
    labelObs,
    error,
    labelStyle,
    placeholder,
    isMulti,
    isDisabled,
    labelFilter,
    children,
    height,
    padding,
    ...rest
}: Props<T>) => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useTheme();
    return (
        <SelectWrapper>
            {label && <LabelText>{label}</LabelText>}
            <Container
                style={{
                    ...labelStyle,
                    borderColor: theme.colors.neutral500,
                    height: height || 'auto',
                }}
                $isOpen={isOpen}
            >
                <div style={{ width: '100%' }}>
                    <ReactSelect
                        placeholder={placeholder || 'Selecione'}
                        isMulti={isMulti}
                        isDisabled={isDisabled}
                        noOptionsMessage={() => 'Nenhuma opção'}
                        onMenuOpen={() => {
                            if (!isDisabled) setIsOpen(true);
                            rest.onOpenChange?.(true); // notifica o pai
                        }}
                        onMenuClose={() => {
                            setIsOpen(false);
                            rest.onOpenChange?.(false); // notifica o pai
                        }}
                        filterOption={customFilterOption}
                        getOptionValue={option => option?.value?.toString()}
                        getOptionLabel={option =>
                            option?.value === ''
                                ? (placeholder as string)
                                : option?.label
                        }
                        {...rest}
                        components={{
                            ...(!isDisabled && {
                                DropdownIndicator: DropdownIndicatorCustom,
                            }),
                        }}
                        styles={{
                            control: prev => ({
                                ...prev,
                                overflowY: 'auto',
                                overflowX: 'hidden',
                                background: 'transparent',
                                padding: padding || '2px 12px',
                                outline: 'none',
                                height: '2.6rem;',
                                width: '100%',
                                whiteSpace: 'nowrap',
                                zIndex: 2,
                                fontSize: '0.875rem',
                                fontFamily: 'Poppins',
                                border: isOpen
                                    ? `1px solid ${theme.colors.primary100}`
                                    : `1px solid ${theme.colors.border}`,
                                borderTopLeftRadius: '0.7rem',
                                borderTopRightRadius: '0.7rem',
                                borderBottomLeftRadius: isOpen
                                    ? '0px'
                                    : '0.7rem',
                                borderBottomRightRadius: isOpen
                                    ? '0px'
                                    : '0.7rem',
                                boxShadow: 'none',
                                ':hover': {
                                    borderColor: theme.colors.neutral500,
                                },
                                ':focus-within': {
                                    border: `1px solid ${theme.colors.primary100}`,
                                },
                            }),
                            placeholder: prev => ({
                                ...prev,
                                color: theme.colors.placeholder,
                                fontSize: '0.875rem',
                            }),
                            container: prev => ({
                                ...prev,
                                padding: 0,
                                width: '100%',
                            }),
                            valueContainer: prev => ({
                                ...prev,
                                padding: 0,
                                width: '100%',
                            }),
                            indicatorsContainer: prev => ({
                                ...prev,
                                width: '1rem',
                            }),
                            indicatorSeparator: prev => ({
                                ...prev,
                                display: 'none',
                            }),
                            dropdownIndicator: prev => ({
                                ...prev,
                                color: isOpen
                                    ? theme.colors.primary100
                                    : '#9C9EA1',
                                display: isDisabled ? 'none' : 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                paddingRight: '4px', // opcional: garante alinhamento visual com a scrollbar
                            }),
                            menu: prev => ({
                                ...prev,
                                zIndex: 999999,
                                width: '100%',
                                marginTop: '-1px', // remove espaço entre control e menu
                                borderTopLeftRadius: 0,
                                borderTopRightRadius: 0,
                                boxShadow: 'none',
                                background: theme.colors.background,
                            }),
                            menuList: base => ({
                                ...base,
                                background: theme.colors.background,
                                border: `1px solid ${theme.colors.primary100}`,
                                borderTop: 'none',
                                borderBottomLeftRadius: '0.7rem',
                                borderBottomRightRadius: '0.7rem',
                                maxHeight: '13.875rem',
                                overflowY: 'auto', // ✅ scroll aqui
                                boxSizing: 'content-box', // ✅ padding não quebra layout
                                paddingRight: '12px', // ✅ afasta a scrollbar
                                fontFamily: 'Poppins',
                                fontSize: '0.875rem',
                                '&::-webkit-scrollbar': {
                                    width: '6px',
                                    marginLeft: '4px', // opcional: afasta a scrollbar do conteúdo
                                },
                                '&::-webkit-scrollbar-thumb': {
                                    backgroundColor: theme.colors.primary100,
                                    borderRadius: '3px',
                                },
                                '&::-webkit-scrollbar-track': {
                                    background: theme.colors.background,
                                },
                                '&::-webkit-scrollbar-button': {
                                    display: 'none',
                                    height: 0,
                                    width: 0,
                                },
                            }),
                            singleValue: (prev, state) => ({
                                ...prev,
                                width: '100%',
                                color:
                                    state.data.value === ''
                                        ? theme.colors.neutral200
                                        : theme.colors.textInput, // Verifica o valor selecionado
                                fontSize: '0.875rem',
                                fontFamily: 'Poppins',
                            }),
                            option: prev => ({
                                ...prev,
                                zIndex: 100,
                                width: '100%',
                                backgroundColor: theme.colors.background,
                                color: theme.colors.neutral300,
                                fontSize: '0.875rem',
                                fontFamily: 'Poppins',
                                ':hover': {
                                    background: theme.colors.neutral500,
                                },
                                ':focus': {
                                    filter: 'brightness(0.95)',
                                },
                            }),
                            noOptionsMessage: prev => ({
                                ...prev,
                                fontSize: '0.75rem',
                                color: theme.colors.neutral200,
                            }),
                        }}
                    />

                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </div>
            </Container>
        </SelectWrapper>
    );
};

export default InputSelect;
