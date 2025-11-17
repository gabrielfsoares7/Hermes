import { styled } from "styled-components";

export const Container = styled.div`
  

.container {
    width: 450px;
    background-color: rgba(65, 66, 66, 0.4);
    border: 2px sold rgba(255, 255, 255, 0.2);
    padding: 40px;
    border-radius: 10px;
  }

  .container-login {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: relative;
    z-index: 1;
  }

  .container-login::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: url("../img/gotham-city-night-view-desktop-wallpaper-cover.jpg");
    background-size: cover;
    background-position: center;
    z-index: -1;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("../img/gotham-city-night-view-desktop-wallpaper-cover.jpg");
  }

  .container h1 {
    text-align: center;
    font-size: 30px;
    color: rgb(255, 255, 255);
  }

  .container .input-field {
    position: relative;
    width: 100%;
    height: 50px;
    margin: 30px auto;
  }

  .input-field input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
    border: 1px solid rgb(133, 133, 133);
    border-radius: 10px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    padding: 20px 45px;
  }

  .input-field input::placeholder {
    color: rgb(255, 255, 255);
  }

  .input-field .icon {
    position: absolute;
    right: 25px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 20px;
  }

  .container .recall-forget {
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
  }

  .recall-forget label {
    color: rgb(255, 255, 255);
  }

  .recall-forget input {
    margin-right: 5px;
  }

  .recall-forget a {
    color: #fff;
    text-decoration: none;
  }

  .recall-forget a:hover {
    text-decoration: underline;
  }

  .container button {
    width: 100%;
    height: 50px;
    background-color: rgb(109, 101, 255);
    border-radius: 15px;
    border: none;
    outline: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: 16px;
    font-weight: 600px;
    text-shadow: none;
  }

  .container .Signup-link {
    font-size: 14px;
    text-align: center;
    margin: 20px 0 10px;
  }

  .container .Signup-link a {
    color: #6f6aff;
    text-decoration: none;
    text-shadow: none;
  }

  .container .Signup-link a:hover {
    text-decoration: underline;
  }

  .login {
    height: 100vh;
    background-image: url("/client/src/img/");
    background-size: cover;
    background-position: center;
  }
`;