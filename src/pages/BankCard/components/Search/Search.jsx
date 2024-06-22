import React, { Component } from 'react';
import {
  SearchContainer,
  SearchWrapper,
  SearchInput,
  SearchButton,
  Text,
  Wrapper,
  мой,
} from './styles';
import search from '@assets/search.png';

// const currencies = ['Commercial Dollar', 'Conadian Dollar', 'Australian Dollar', 'Euro', 'Libra', 'Argentina Peso', 'Yen', 'Yuan'];

export class Search extends Component {
  render() {
    return (
      <Wrapper>
        <Text>Search currency in the bank</Text>
        <SearchContainer>
          <form>
            <SearchWrapper>
              <SearchInput type="text" placeholder="Currency search..." />
              <SearchButton type="submit">
                <img src={search} alt="Search Button" />
              </SearchButton>
            </SearchWrapper>
          </form>
        </SearchContainer>
      </Wrapper>
    );
  }
}

export default Search;
