import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 105px;
`;

export const SearchContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 38px;
  font-weight: 400;
  line-height: 57px;
  text-align: center;
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 300px;
`;

export const SearchInput = styled.input`
  max-width: 450px;
  padding: 15px;
  padding-right: 40px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid rgba(27, 32, 40, 1);
  width: 100%;
  background: rgba(27, 32, 40, 1);
  color: rgba(211, 211, 211);
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: -40px;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
`;
