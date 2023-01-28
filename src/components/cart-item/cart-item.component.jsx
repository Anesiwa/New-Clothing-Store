import {
  CartItemContainer,
  CartItemImage,
  CartItemDetails,
  CartItemName,
} from "./cart-item.styles.js";

export default function CartItem({ cartItem }) {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={`${name}`} />
      <CartItemDetails>
        <CartItemName>{name}</CartItemName>
        <span className="price">
          {quantity} x ${price}
        </span>
      </CartItemDetails>
    </CartItemContainer>
  );
}
