import React from "react";

import Button from "@material-ui/core/Button";

import styled from "styled-components";


const StyledButton = styled(Button)`
  && {
    color: white;
    background: #5aac44;
  }
`;

const TrelloButton = ({ children, onClick }) => {
  return (
    <StyledButton variant="contained" onMouseDown={onClick}>
      {children}
    </StyledButton>
  );
};

export default TrelloButton;
