import InputText from '../InputText/InputText';
import {
    CartItemContainer,
    ProductInfo,
    ProductText,
    Price,
    Subtotal,
    RemoveButton,
} from './styles';
interface CartItemProps {
    title: string;
    author: string;
    price: number;
    quantity: number;
    image: string;
    onRemove: () => void;
    onQuantityChange: (newQuantity: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({
    title,
    author,
    price,
    quantity,
    image,
    onRemove,
    onQuantityChange,
}) => {
    return (
        <CartItemContainer>
            <ProductInfo>
                <img src={image} alt={title} className={image} />
                <ProductText>
                    <h3>{title}</h3>
                    <p>{author}</p>
                </ProductText>
            </ProductInfo>
            <div>
                <InputText
                    type="number"
                    value={String(quantity)}
                    onChange={e => onQuantityChange(Number(e.target.value))}
                    label="Quantidade"
                    min={1}
                    style={{ width: 50 }}
                />
                <Price>{price.toFixed(2)}</Price>
                <Subtotal>R${(price * quantity).toFixed(2)}</Subtotal>
                <RemoveButton onClick={onRemove}>X</RemoveButton>
            </div>
        </CartItemContainer>
    );
};
export default CartItem;
