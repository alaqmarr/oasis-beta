import { useState, useCallback, MouseEvent } from 'react';

interface TiltValues {
  rotateX: number;
  rotateY: number;
  transform: string;
}

export function useTilt(maxTilt: number = 10) {
  const [values, setValues] = useState<TiltValues>({
    rotateX: 0,
    rotateY: 0,
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
  });

  const onMouseMove = useCallback((e: MouseEvent<HTMLElement>) => {
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = ((mouseY / height) * maxTilt).toFixed(2);
    const rotateY = ((-mouseX / width) * maxTilt).toFixed(2);

    setValues({
      rotateX: Number(rotateX),
      rotateY: Number(rotateY),
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  }, [maxTilt]);

  const onMouseLeave = useCallback(() => {
    setValues({
      rotateX: 0,
      rotateY: 0,
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
  }, []);

  return { values, onMouseMove, onMouseLeave };
}
