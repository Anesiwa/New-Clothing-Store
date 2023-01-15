import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";

export default function CartDropDown() {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
