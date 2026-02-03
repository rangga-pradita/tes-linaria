import { styled } from "@linaria/react";

const Box = styled.div`
  padding: 40px;
  background: #f6f6f6;
  border: 2px solid #333;
  text-align: center;
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 8px 20px;
  font-weight: bold;
`;

export default function App() {
  return (
    <Box>
      <h2>Hello Linaria</h2>
      <Button>Klik</Button>
    </Box>
  );
}
