import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const LeftContainer = styled.div`
  padding: 40px 40px 40 0px;
  background: #fff;
  width: 700px;
  height: 760px;
  box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.02);
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-right: 1px solid #288a5c;
`;

export const RightContainer = styled.div`
  padding: 40px 40px 40 0px;
  background: rgb(11, 120, 74);
  background: linear-gradient(
    130deg,
    rgba(11, 120, 74, 1) 35%,
    rgba(8, 92, 133, 1) 85%
  );
  width: 500px;
  height: 760px;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
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
  height: 60px;
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

export const RequiredInput = styled.span`
  color: red;
  margin-right: 5px;
`;

export const TittleBigInfo = styled.h1`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  color: white;
`;

export const TitleInfo = styled.h3`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  color: white;
`;
