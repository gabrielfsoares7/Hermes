import styled from "styled-components";

export const Container = styled.div`
  .container-search {
    background-color: #151531;
    padding: 60px 90px;
    border: 1px solid #292929;
  }
  .container-search h1 {
    color: #fff;
    font-size: 55px;
  }
  .container-search p {
    color: #e4e5e7cf;
    font-size: 20px;
    margin-top: 0.8;
  }
  .container-search .input-search {
    background-color: #121212;
    border: 1px solid #292929;
    padding: 10px;
    width: 100%;
    border-radius: 8px;
    color: #fff;
    margin-top: 2rem;
  }
  .containe-btns-filter {
    background-color: #060606;
    padding: 35px 90px;
    border-bottom: 1px solid #292929;
    border-left: 1px solid #292929;
    border-right: 1px solid #292929;
  }

  .btns-filter {
    display: flex;
    gap: 10px;
  }
  .btns-filter .btn-filter {
    background-color: transparent;
    border: 1px solid #292929;
    color: #fff;
    padding: 8px 14px;
    border-radius: 7px;
    font-weight: 600;
  }
  .btns-filter .btn-filter:hover {
    background-color: oklch(0.646 0.222 41.116);
    color: #060606;
  }
  .btns-filter .btn-filter.active {
    background-color: #5d5cff;
    color: #fff;
  }
  .btns-filter .btn-filter.active:hover {
    background-color: #5d5cff;
    opacity: 0.8;
    color: #fff;
  }
`;
