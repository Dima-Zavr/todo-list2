import { useState, useEffect, useCallback } from 'react';

export const useSequentialAnimation = <T, >(
  items: T[],
  animationDelay: number = 150
) => {
  const [visibleStates, setVisibleStates] = useState<boolean[]>([]);

  const startAnimation = useCallback(() => {
    // Сначала скрываем все элементы
    setVisibleStates(Array(items.length).fill(false));
    
    // Затем последовательно показываем с задержкой
    items.forEach((_, index) => {
      setTimeout(() => {
        setVisibleStates(prev => {
          const newStates = [...prev];
          newStates[index] = true;
          return newStates;
        });
      }, index * animationDelay);
    });
  }, [items, animationDelay]);

  // Автоматически запускаем анимацию при изменении items
  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return visibleStates;
};