import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

export const Cards = styled.div`
  width: 320px;
  height: 430px;
  background: white;
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Img = styled.img`
  width: 100%;
  height: 50%;
`;
export const Title = styled.div`
  font-size: 20px;
`;
export const Button = styled.div`
  width: 200px;
  height: 40px;
  background: red;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 23px;
  border-radius: 10px;
  margin-top: auto;
  margin-bottom: 60px;
  cursor: pointer;
`;
