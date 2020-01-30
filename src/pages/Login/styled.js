import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const FormContainer = styled.div`
  height: 550px;
  width: 600px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.02);
  border-radius: 40px;
`;

export const Image = styled.img`
  padding: 20px;
  height: 120px;
  width: 200px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;
export const TitleSub = styled.p`
  text-align: center;
  color: #333;
`;

export const Form = styled.form`
  margin-top: 30px;
`;
export const FormGroup = styled.div`
  margin-top: 20px;
  display: grid;
  padding: 0 80px 0 80px;
`;
export const FormLabel = styled.label`
  color: #288a5c;
  font-size: 20px;
  display: block;
  font-weight: bold;
`;
export const FormInput = styled.input`
  width: 100%;
  height: 32px;
  font-size: 19px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #eee;
`;

export const FormButton = styled.button`
  width: 60%;
  border: 0;
  height: 40px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-top: 30px;
  background: #288a5c;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: background 0.5s;
`;

export const ContainerLink = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
`;

export const LinkRedirect = styled.a`
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
  text-decoration: none;

  &:hover {
    color: #4887b2;
  }
`;

export const FooterInform = styled.p`
  margin-top: 20px;
  color: red;
  font-size: 11px;
  text-align: center;
`;

export const LoginErrorText = styled.p`
  margin-top: 10px;
  font-size: 16px;
  color: red;
  text-align: center;
`;
