import { renderHook, act } from '@testing-library/react';
import { useTimer } from '../../hooks/useTimer';
import { describe, test, expect } from 'vitest';

describe('useTimer', () => {
  test('should initialize with default values', () => {
    const { result } = renderHook(() => useTimer());
    
    expect(result.current.time).toBe(25 * 60);
    expect(result.current.isActive).toBe(false);
  });

  test('should start timer when startTimer is called', () => {
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.startTimer();
    });

    expect(result.current.isActive).toBe(true);
  });

  test('should reset timer when resetTimer is called', () => {
    const { result } = renderHook(() => useTimer());

    act(() => {
      result.current.startTimer();
      result.current.resetTimer();
    });

    expect(result.current.time).toBe(25 * 60);
    expect(result.current.isActive).toBe(false);
  });
});