import React, { Component } from 'react';
import {
  SearchContainer,
  SearchWrapper,
  SearchInput,
  SearchButton,
  Text,
  Wrapper,
  SuggestionsList,
  SuggestionItem,
} from './styles';
import search from '@assets/search.png';
import PropTypes from 'prop-types';
import { CURRENCIES } from '@constants/currencyConstants';

export class Search extends Component {
  state = {
    searchTerm: '',
    searchResults: [],
    showSuggestions: false,
  };

  handleInputChange = (event) => {
    const searchTerm = event.target.value;
    const searchResults = CURRENCIES.filter((currency) =>
      currency.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    this.setState({ searchTerm, searchResults, showSuggestions: true });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  handleSuggestionClick = (suggestion) => {
    this.setState({
      searchTerm: suggestion,
      searchResults: [],
      showSuggestions: false,
    });
  };

  handleContainerClick = () => {
    this.setState({ showSuggestions: true });
  };

  handleOutsideClick = (event) => {
    if (this.containerRef && !this.containerRef.contains(event.target)) {
      this.setState({ showSuggestions: false });
    }
  };

  componentDidMount() {
    document.addEventListener('click', this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  }

  render() {
    const { searchTerm, searchResults, showSuggestions } = this.state;

    return (
      <Wrapper>
        <Text>Search currency in the bank</Text>
        <SearchContainer ref={(ref) => (this.containerRef = ref)}>
          <form onSubmit={this.handleFormSubmit}>
            <SearchWrapper onClick={this.handleContainerClick}>
              <SearchInput
                type="text"
                placeholder="Currency search..."
                value={searchTerm}
                onChange={this.handleInputChange}
              />
              <SearchButton type="submit">
                <img src={search} alt="Search Button" />
              </SearchButton>
              {showSuggestions && searchResults.length > 0 && (
                <SuggestionsList>
                  {searchResults.map((result, index) => (
                    <SuggestionItem
                      key={index}
                      onClick={() => this.handleSuggestionClick(result)}
                    >
                      {result}
                    </SuggestionItem>
                  ))}
                </SuggestionsList>
              )}
            </SearchWrapper>
          </form>
        </SearchContainer>
      </Wrapper>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
