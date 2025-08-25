import { CheckboxContainer, HiddenCheckbox, StyledCheckbox } from './styles';

interface CheckboxProps {
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    checked?: boolean;
    value?: string;
    disabled?: boolean;
    bgColor?: string;
    borderColor?: string;
    borderRadius?: string;
    name?: string;
    readOnly?: boolean;
    id?: string;
    content?: boolean;
}

const CheckBox = ({
    onChange,
    checked,
    value,
    disabled,
    bgColor,
    borderColor,
    borderRadius,
    name,
    readOnly,
    id = 'checkbox-id',
    content = false,
    ...rest
}: CheckboxProps) => {
    return (
        <CheckboxContainer>
            <HiddenCheckbox
                id={id}
                disabled={disabled}
                checked={checked}
                onChange={onChange}
                value={value}
                name={name}
                readOnly={readOnly}
                {...rest}
            />
            <StyledCheckbox
                $bgColor={bgColor}
                $borderColor={borderColor}
                $borderRadius={borderRadius}
                $content={content}
            />
        </CheckboxContainer>
    );
};

export default CheckBox;
