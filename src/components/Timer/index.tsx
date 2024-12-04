import styled from 'styled-components';
import { Controls } from '../Controls';
import { ProgressBar } from '../Progress';
import { useTimer } from '../../hooks/useTimer';
import { formatTime } from '../../utils/time';

export const Timer = () => {
  const { time, isActive, totalTime, startTimer, pauseTimer, resetTimer } = useTimer();

  // プログレスの計算（残り時間から進捗率を計算）
  const progress = ((totalTime - time) / totalTime) * 100;

  return (
    <TimerContainer>
      <TimeDisplay>{formatTime(time)}</TimeDisplay>
      <ProgressBar progress={progress} size="medium" />
      <Controls 
        isActive={isActive}
        onStart={startTimer}
        onPause={pauseTimer}
        onReset={resetTimer}
      />
    </TimerContainer>
  );
};

const TimerContainer = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.medium};
`;

const TimeDisplay = styled.div`
  font-size: 4rem;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.medium};
`;