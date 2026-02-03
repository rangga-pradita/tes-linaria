import React from "react";
import { styled } from "@linaria/react";

const Animation = styled.div`
  color: #343434;
  font-weight: bold;
  margin-top: 100px;
  animation: bounce 1s linear infinite;

  @keyframes bounce {
    0%,
    20%,
    53%,
    80%,
    100% {
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      transform: translate3d(0, -30px, 0);
    }

    70% {
      transform: translate3d(0, -15px, 0);
    }

    90% {
      transform: translate3d(0, -4px, 0);
    }
  }
`;

const App = () => (
  <div style={{ textAlign: "center" }}>
    <Animation>Advance Animation Using Linaria</Animation>
  </div>
);

export default App;
