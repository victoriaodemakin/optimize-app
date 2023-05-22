import React, { useState } from 'react';
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import BackgroundImg from "../assets/BackgroundEllipse.svg";
import MobileBackground from "../assets/MobileImage.png";
import { Button, TextField } from "@mui/material";

const ContainedButton = styled(Button)`
  background: #002a80;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1em;
  color: white;
  width: 150px;
`;

const OutlineButton = styled(Button)`
  background: #0dde6500;
  border-radius: 4px;
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  color: #002a80;
  width: 150px;
  border: 2px solid #002a80;
  margin-left: 1em;
`;

const HeaderTypography = styled(Typography)`
  color: #002a80;
  font-family: "Urbanist";
  font-weight: 800;
  font-size: 1.5em;
  line-height: 4px;
`;

function Signup() {
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here, e.g., send data to server, validate, etc.
    console.log('Signup form submitted');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div>
      {isDesktop ? (
        <h1>This is the hero for desktop devices.</h1>
      ) : (
        <div className='Mobile-container'>
          <div className="MobileHeader">
            <HeaderTypography variant="h3">Opitrack</HeaderTypography>
            <img
              src={BackgroundImg}
              className="BackgroundCircle"
              alt="ellipse circle"
            />
          </div>
          <div className="MobileItems">
            <div>
              <h1>Create an Account</h1>
              <p>Already have an account? Log in</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div>
                <TextField
                  label="FirstName"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div>
                <TextField
                  label="Lastname"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div>
                <TextField
                  label="Email Address"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div>
                <TextField
                  type="password"
                  label="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div>
                <TextField
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </div>
              <div className="MobileBtn">
                <OutlineButton
                  variant="outlined"
                  sx={{ textTransform: "capitalize", fontWeight: "bold" }}
                >
                  Sign Up
                </OutlineButton>
              </div>
              <div className='terms and conditiom'>
              <h4>I agree to all Terms & Conditions</h4>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
