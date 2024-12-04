import { Timer } from './components/Timer';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <Title>Pomodoro Timer</Title>
      <Timer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  text-align: center;
  color: ${props => props.theme.colors?.primary};
`;

export default App;