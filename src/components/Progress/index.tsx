import styled from 'styled-components';

interface ProgressBarProps {
  progress: number; // 0 to 100
  size?: 'small' | 'medium' | 'large';
}

export const ProgressBar = ({ progress, size = 'medium' }: ProgressBarProps) => {
  return (
    <ProgressContainer>
      <ProgressTrack size={size}>
        <ProgressFill 
          style={{ width: `${progress}%` }} 
          size={size}
        />
      </ProgressTrack>
      <ProgressText>{Math.round(progress)}%</ProgressText>
    </ProgressContainer>
  );
};

const ProgressContainer = styled.div`
  margin: ${props => props.theme.spacing.medium} 0;
`;

const ProgressTrack = styled.div<{ size: string }>`
  width: 100%;
  height: ${props => 
    props.size === 'small' ? '8px' : 
    props.size === 'large' ? '16px' : '12px'
  };
  background-color: ${props => props.theme.colors.background};
  border-radius: 999px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ size: string }>`
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  transition: width 0.3s ease;
`;

const ProgressText = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: ${props => props.theme.colors.secondary};
  margin-top: ${props => props.theme.spacing.small};
`;