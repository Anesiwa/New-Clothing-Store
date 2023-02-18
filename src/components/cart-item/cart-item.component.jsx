import { CartItemContainer, ItemDetails } from "./cart-item.styles.js";

export default function CartItem({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
}
