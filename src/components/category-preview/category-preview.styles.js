import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`

.category-preview-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  `;

export const CategoryTitle = styled.span`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const CategoriesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;
