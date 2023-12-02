import styled from '@emotion/styled';

export const ListHeader = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0 20px;
  background-color: #909090;
  border: 1px solid #000;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const ItemHeader = styled.li`
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
`;

export const TextHeader = styled.p`
  font-size: large;
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: #757575;
`;
