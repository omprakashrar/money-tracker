import styled from "styled-components";
import HomeComponent from "./modules/home";


const Container  = styled.div`
display: flex;
flex-direction: column;
font-family: Montserrat;
align-items: center;
margin: 30px 0 10px
`;

const Header = styled.span`
color: black;
font-size: 25px;
font-weight: bold;
`;

function App() {
  return (
    <Container>
      <Header>Expance Tracker</Header>
      <HomeComponent/>
    </Container>
  );
}

export default App;
