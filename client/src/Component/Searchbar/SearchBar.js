import { Component } from "react";
import styled from "styled-components";

export const SearchContainer = styled.div`
  input {
    padding-right: 20%;
    padding: 8px 16px;
    font-size: 16px;
    border-radius: 6px;
    border: #fff;
    outline: none;
    background-color: #2a2a2a;
    color: #fff;
    width: 200px;
    height: 25px;
    transition: background-color 0.3s ease;
  }

  input::placeholder{
    color: #a0a0a0;
  }
  input:focus{
    background-color: #a3a3a3;
  }
`;

