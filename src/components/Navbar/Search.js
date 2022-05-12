import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  margin-left: auto;
  margin-right: 20px;
`;

const StyledSearchBar = styled.input`
  ::placeholder {
    font-family: "Noto Kufi Arabic";
    font-size: 0.75rem;
  }
`;

const Search = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Work");
  }

  return (
    <StyledSearch>
      <form onSubmit={handleSubmit}>
        <StyledSearchBar
          name="search"
          type="text"
          placeholder="ما الذي تبحث عنه"
          dir="rtl"
        />
      </form>
    </StyledSearch>
  );
};

export default Search;
