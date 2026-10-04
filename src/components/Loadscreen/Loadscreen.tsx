import { useEffect, useState } from 'react';
import './Loadscreen.css';

export function Loadscreen({ onComplete }: { onComplete: () => void }) {
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2700;
    const intervalTime = duration / 100;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, intervalTime);
    // Fade out slightly before 3s to end exactly at 3s
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 2700);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`loadscreen ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="loadscreen-content">
        <div className="loadscreen-logo-container">
          <img src="/images/logo-nova.png" alt="Aragas Fitness Loading" className="loadscreen-logo-dim" width="200" height="200" />
          <img src="/images/logo-nova.png" alt="Aragas Fitness Loading" className="loadscreen-logo-bright" width="200" height="200" />
        </div>
        <div className="loadscreen-progress">{progress}%</div>
      </div>
    </div>
  );
}
