import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Timer } from '../../components/Timer';
import { theme } from '../../styles/theme';
import { describe, test, expect } from 'vitest';

const renderTimer = () => {
  return render(
    <ThemeProvider theme={theme}>
      <Timer />
    </ThemeProvider>
  );
};

describe('Timer', () => {
  test('should render initial time', () => {
    renderTimer();
    expect(screen.getByText('25:00')).toBeInTheDocument();
  });

  test('should show start button initially', () => {
    renderTimer();
    expect(screen.getByText('Start')).toBeInTheDocument();
  });

  test('should switch to pause button when started', () => {
    renderTimer();
    fireEvent.click(screen.getByText('Start'));
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });
});