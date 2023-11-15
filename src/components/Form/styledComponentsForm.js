import { theme } from "theme/theme";
import styled from "styled-components";

let error = false;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;

  h2 {
    text-transform: uppercase;
    font-size: ${theme.fontSizes.Regular24};
  }
  p {
    margin-top: 10px;
    font-size: ${theme.fontSizes.Medium16};
  }
`;
export const FormItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;
export const Ava = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    margin-top: 15px;
    color: ${theme.colors.primary.primaryYellow};
    font-size: ${theme.fontSizes.Medium20};
  }
`;
export const InputContainer = styled.div`
  margin-top: 50px;
  height: 100%;
  input {
    width: 495px;
    height: 65px;
    border: 2px solid ${theme.colors.primary.blue30};
    border-radius: 20px;
  }
  p {
    font-size: ${theme.fontSizes.Medium16};
    margin-bottom: 10px;
    font-weight: 400;
    line-height: normal;
  }
`;
export const InputUserName = styled.div`
  height: 120px;
  margin: 0px 0px 25px 0px;
  input {
    width: 470px;
    padding-left: 25px;
    border: 2px solid
      ${!error ? theme.colors.primary.blue30 : theme.colors.supporting.error};
  }
`;
export const InputUserNameError = styled.p`
  height: 100%;
  margin: 10px 0px;
  color: ${theme.colors.supporting.error};
`;
export const InputCountry = styled.div`
  height: 120px;
`;
