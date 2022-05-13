import React from "react";
import { IoIosSearch } from "react-icons/io";
import styled from "styled-components";

const StyledSearch = styled.div`
  margin-left: auto;
  margin-right: 20px;
`;

const StyledSearchBar = styled.input`
  font-family: "Noto Kufi Arabic";
  font-size: 0.75rem;
  color: #0e5aa7;
  height: 40px;
  width: 400px;
  padding-right: 10px;
  border: none;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  ::placeholder {
  }
`;

const StyledSubmit = styled.button`
  height: 40px;
  color: white;
  background-color: #dc2226;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  cursor: pointer;
`;

const Search = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("Work");
  }

  return (
    <StyledSearch>
      <form onSubmit={handleSubmit}>
        <StyledSubmit>
          <IoIosSearch fontSize="1.2rem" />
        </StyledSubmit>
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
