import {
  CategoryPreviewContainer,
  CategoryTitle,
  CategoriesPreview,
} from "./category-preview.styles.js";
import ProductCard from "../product-card/product-card.component";

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2>
      <CategoryTitle>{title.toUpperCase()}</CategoryTitle>
    </h2>
    <CategoriesPreview>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </CategoriesPreview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
