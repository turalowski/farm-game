import { Background, Game, Keys } from '@/utils';
import { useState } from 'react';

export function useBackground(gameState: Game) {
  const [background, setBackground] = useState<Background>({
    x: -810,
    y: -580,
  });

  function moveBackgroundOnKeyPress(keys: Keys) {
    if (keys.w.pressed) {
      setBackground(prevBackground => ({
        ...prevBackground,
        y: prevBackground.y + 3,
      }));
    }
    if (keys.s.pressed) {
      setBackground(prevBackground => ({
        ...prevBackground,
        y: prevBackground.y - 3,
      }));
    }
    if (keys.a.pressed) {
      setBackground(prevBackground => ({
        ...prevBackground,
        x: prevBackground.x + 3,
      }));
    }
    if (keys.d.pressed) {
      setBackground(prevBackground => ({
        ...prevBackground,
        x: prevBackground.x - 3,
      }));
    }
  }

  function drawBackground(ctx: CanvasRenderingContext2D) {
    const backgroundImage = gameState.backgroundImage;
    if (backgroundImage) {
      ctx.drawImage(backgroundImage, background.x, background.y);
    }
  }

  return { drawBackground, moveBackgroundOnKeyPress };
}
