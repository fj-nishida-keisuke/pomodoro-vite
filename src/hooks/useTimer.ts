import { useState, useCallback, useEffect } from 'react';

const INITIAL_TIME = 25 * 60; // 25 minutes in seconds

export const useTimer = () => {
  const [time, setTime] = useState(INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number;

    if (isActive && time > 0) {
      interval = window.setInterval(() => {
        setTime(currentTime => currentTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isActive, time]);

  const startTimer = useCallback(() => {
    if (time > 0) {
      setIsActive(true);
    }
  }, [time]);

  const pauseTimer = useCallback(() => {
    setIsActive(false);
  }, []);

  const resetTimer = useCallback(() => {
    setIsActive(false);
    setTime(INITIAL_TIME);
  }, []);

  return {
    time,
    isActive,
    totalTime: INITIAL_TIME,
    startTimer,
    pauseTimer,
    resetTimer
  };
};