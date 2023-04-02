import { Game, loadImage } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import { usePlayer, useCollisions, useKeyBindings, useBackground } from 'hooks';

export function useGame() {
  const [game, setGame] = useState<Game>({
    isStarted: false,
    backgroundImage: null,
    playerImage: null,
  });

  // refs
  const animationRef = useRef<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = canvasRef.current?.getContext('2d') as CanvasRenderingContext2D;

  // hooks
  const { drawBackground, moveBackgroundOnKeyPress } = useBackground(game);
  const { drawPlayer } = usePlayer(game);
  const { keys, bindEventListeners } = useKeyBindings();
  useCollisions();

  function animate() {
    if (game.backgroundImage && game.playerImage) {
      drawBackground(ctx);
      drawPlayer(ctx);
    }
    moveBackgroundOnKeyPress(keys);
  }

  async function loadAssets() {
    const backgroundImage = await loadImage('/Pellet Town.png');
    const playerImage = await loadImage('/playerDown.png');
    setGame({
      isStarted: true,
      backgroundImage: backgroundImage,
      playerImage: playerImage,
    });
  }

  useEffect(() => {
    if (game.isStarted) {
      animationRef.current = requestAnimationFrame(animate);
      return () => {
        cancelAnimationFrame(animationRef.current);
      };
    }
  }, [game, animate]);

  useEffect(() => {
    loadAssets();
    bindEventListeners();
  }, []);

  return { canvasRef };
}
