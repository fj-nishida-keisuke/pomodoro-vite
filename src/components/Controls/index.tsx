import styled from 'styled-components';

interface ControlsProps {
  isActive: boolean;
  onStart: () => void;
  onPause: () => void;
  onReset: () => void;
}

export const Controls = ({ isActive, onStart, onPause, onReset }: ControlsProps) => {
  return (
    <ControlsContainer>
      {!isActive ? (
        <Button $primary onClick={onStart}>
          Start
        </Button>
      ) : (
        <Button onClick={onPause}>
          Pause
        </Button>
      )}
      <Button onClick={onReset}>
        Reset
      </Button>
    </ControlsContainer>
  );
};

const ControlsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: ${props => props.theme.spacing.large};
`;

// $primaryとすることで、DOM属性としては渡されなくなります
const Button = styled.button<{ $primary?: boolean }>`
  padding: 0.5rem 1.5rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => 
    props.$primary ? props.theme.colors.primary : props.theme.colors.secondary};
  color: white;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;