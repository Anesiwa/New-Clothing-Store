import { useContext } from "react";
import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from "./cart-icon.styles.js";
import { CartContext } from "../../contexts/cart.context";

export default function CartIcon() {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartItemCount}</ItemCount>
    </CartIconContainer>
  );
}
