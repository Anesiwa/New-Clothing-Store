import styled from "styled-components";

import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 2px solid #000;
  padding: 30px;
  margin: 25px;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500 px;
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`;
