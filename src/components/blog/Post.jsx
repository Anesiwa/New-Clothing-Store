import React, { useEffect } from "react";
import { useParams } from "react-router";

export default function Post() {
  let { postSlug } = useParams();

  useEffect(() => {
    // Fetch post using the postSlug
  }, [postSlug]);

  function menuItems(props) {
    return (
      <div>
        <span className="menu-item">{props.menuItemTitle}</span>
        <span classname="menu-item-cost">{props.menuItemCost}</span>
        <div className="menu-description">{props.menuItemDescription}</div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="mt-5">Dinner menu</h1>
      <h6 className="mb-5">{postSlug}</h6>
      <h2 className="food-category">Appetizers</h2>
      <div>
        <menuItems
          menuItemTitle="Roasted Garlic"
          menuItemCost={9}
          menuItemDescription="Roasted garlic in olive oil.Served with Crostinis"
        />
        <menuItems
          menuItemTitle="Roasted Garlic"
          menuItemCost="9"
          menuItemDescription="Roasted garlic in olive oil.Served with Crostinis"
        />
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
}
